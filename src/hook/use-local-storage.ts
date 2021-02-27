import { useState } from "react";

function useLocalStorage(key: string, defaultValue: boolean | string | object) {
  const [value, setValue] = useState(() => {
    const stickyValue = window.localStorage.getItem(key);
    return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue;
  });

  window.localStorage.setItem(key, JSON.stringify(value));

  return [value, setValue];
}

export default useLocalStorage;
