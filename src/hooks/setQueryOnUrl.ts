export const setQuery = (key: string, value: string) => {
  const url = new URL(window.location.href);
  const params = new URLSearchParams(url.search);

  params.set(key, value);

  // Replace the current URL without adding a new entry in history
  window.history.replaceState({}, "", `${url.pathname}?${params.toString()}`);
};
