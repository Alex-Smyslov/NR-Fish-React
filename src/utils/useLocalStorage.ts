/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';

function getStorageValue(key: string, defaultValue: any) {
  const saved: any = localStorage.getItem(key);
  console.log(saved);
  const initial = JSON.parse(saved);
  return initial || defaultValue;
}

export const useLocalStorage = (key: string, defaultValue: string) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
