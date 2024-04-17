import dayjs from "dayjs";

export const saveItem = (key, value, expirationInMilliseconds) => {
  const entry = { value };

  if (expirationInMilliseconds) {
    entry.expiry = dayjs().valueOf() + expirationInMilliseconds;
  }

  localStorage.setItem(key, JSON.stringify(entry));
};

export const deleteItem = (key) => {
  localStorage.removeItem(key);
};

export const getItem = (key) => {
  const item = localStorage.getItem(key);

  if (item) {
    const entry = JSON.parse(item);

    if (entry.expiry && dayjs().valueOf() > entry.expiry) {
      deleteItem(key);

      return null;
    }

    return entry.value;
  }

  return null;
};

export const clearStorage = () => {
  localStorage.clear();
};
