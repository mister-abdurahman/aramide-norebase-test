export const getQuery = (key: string) => {
  const queryString = window.location.search;

  // Parse the query string
  const urlParams = new URLSearchParams(queryString);

  // Retrieve a specific query parameter (e.g., "id")
  return urlParams.get(key);
};
