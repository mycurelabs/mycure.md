export const setItem = (key, data) => {
  window.localStorage.setItem(key, JSON.stringify(data));
};

export const getItem = (key) => {
  return JSON.parse(window.localStorage.getItem(key));
};

export const removeItem = (key) => {
  return window.localStorage.removeItem(key);
};
