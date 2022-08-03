export const getLocalStorage = (key = "") => {
  if (localStorage === null || localStorage === undefined) return null;

  return JSON.parse(localStorage.getItem(key));
};

export const setLocalStorage = (key = "", value = {}) => {
  if (localStorage === null || localStorage === undefined) return null;

  localStorage.setItem(key, JSON.stringify(value));
};
