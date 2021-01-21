/* eslint-disable no-extra-boolean-cast */
import { TodoType } from "constants/types";
import { localStorageKeys } from "constants/enums";

export const getFromLocaleStorage = (key: localStorageKeys): any => {
  const data = localStorage.getItem(key);
  if (!data) {
    return undefined;
  }
  return JSON.parse(data);
};
export const saveToLocaleStorage = (key: localStorageKeys, data: any): void => {
  if (typeof data === "object") {
    localStorage.setItem(key, JSON.stringify(data));
  } else localStorage.setItem(key, data);
};
export const removeFromLocaleStorage = (key: localStorageKeys): void => {
  localStorage.removeItem(key);
};
