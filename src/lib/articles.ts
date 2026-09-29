/** The entries either side of `id` in a newest-first list: `older` is the previous one, `newer` the next. */
export function neighbours<T extends { id: string }>(entries: T[], id: string) {
  const i = entries.findIndex((entry) => entry.id === id);
  if (i < 0) return {};
  return { newer: entries[i - 1], older: entries[i + 1] };
}
