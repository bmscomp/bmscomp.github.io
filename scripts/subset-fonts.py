"""Subset EB Garamond into the four web fonts in src/assets/fonts/eb-garamond/.

    pip install fonttools brotli
    python3 scripts/subset-fonts.py "EBGaramond[wght].ttf" "EBGaramond-Italic[wght].ttf"

The sources are the full variable fonts from google/fonts (ofl/ebgaramond); the npm and Google Fonts
builds drop the small caps, old-style figures and superior figures. With no arguments the script
re-subsets the committed fonts in place, which is enough for a change that only removes glyphs.

This is pyftsubset with the unicodes and features below, plus one step pyftsubset has no option for:
`sups` keeps only the figures 0-9. The footnote references (font-variant-position: super in
global.css) are the only superiors the site sets, and the superior letters cost about 18 KB in the
italic, which every page loads.
"""

import io
import sys
from pathlib import Path

from fontTools import subset

OUT = Path(__file__).resolve().parent.parent / 'src/assets/fonts/eb-garamond'

LATIN = (
    'U+0020-007E,U+00A0-00FF,U+0131,U+0152-0153,U+02C6,U+02DA,U+02DC,U+2013-2014,U+2018-201E,'
    'U+2020-2022,U+2026,U+2030,U+2032-2033,U+2039-203A,U+20AC,U+2122,U+2190-2199,U+2212,U+25E6,'
    'U+2766-2767'
)
LATIN_FEATURES = (
    'kern,liga,clig,calt,ccmp,locl,mark,mkmk,smcp,c2sc,onum,lnum,pnum,tnum,case,frac,numr,dnom,ordn,sups'
)
# Greek letters and math symbols, for the pages that use them (the unicode-range in global.css).
GREEK_MATH = 'U+0391-03A1,U+03A3-03A9,U+03B1-03C9,U+03D1,U+03D5-03D6,U+03F5,U+2200-22FF,U+25A1'
GREEK_MATH_FEATURES = 'kern,liga,clig,calt,ccmp,locl,mark,mkmk,onum,lnum,pnum,tnum,case,sups'

# (file, source: 0 upright or 1 italic, unicodes, features)
FONTS = [
    ('EBGaramond-Latin-VF.woff2', 0, LATIN, LATIN_FEATURES),
    ('EBGaramond-Italic-Latin-VF.woff2', 1, LATIN, LATIN_FEATURES),
    ('EBGaramond-GreekMath-VF.woff2', 0, GREEK_MATH, GREEK_MATH_FEATURES),
    ('EBGaramond-Italic-GreekMath-VF.woff2', 1, GREEK_MATH, GREEK_MATH_FEATURES),
]


def superior_figures_only(font):
    """Drop every `sups` substitution except the figures', so the subset leaves out the rest."""
    cmap = font.getBestCmap()
    figures = {cmap[c] for c in range(0x30, 0x3A) if c in cmap}
    gsub = font['GSUB'].table
    for record in gsub.FeatureList.FeatureRecord:
        if record.FeatureTag != 'sups':
            continue
        for index in record.Feature.LookupListIndex:
            for table in gsub.LookupList.Lookup[index].SubTable:
                table = getattr(table, 'ExtSubTable', table)
                if table.LookupType != 1:
                    raise SystemExit(f'sups lookup {index} has type {table.LookupType}, not single substitution')
                table.mapping = {glyph: sup for glyph, sup in table.mapping.items() if glyph in figures}


def write(source, name, unicodes, features):
    options = subset.Options(flavor='woff2', layout_features=features.split(','))
    # Loaded and saved as pyftsubset does; read into memory first, because without arguments the
    # source and the output are the same file.
    font = subset.load_font(io.BytesIO(source.read_bytes()), options, dontLoadGlyphNames=True)
    superior_figures_only(font)
    subsetter = subset.Subsetter(options)
    subsetter.populate(unicodes=subset.parse_unicodes(unicodes))
    subsetter.subset(font)
    subset.save_font(font, OUT / name, options)
    print(f'{name}: {(OUT / name).stat().st_size} bytes, {len(font.getGlyphOrder())} glyphs')


sources = [Path(arg) for arg in sys.argv[1:]]
if len(sources) not in (0, 2):
    raise SystemExit(__doc__)
for name, style, unicodes, features in FONTS:
    write(sources[style] if sources else OUT / name, name, unicodes, features)
