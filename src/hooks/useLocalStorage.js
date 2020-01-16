import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        // if (window.localStorage.getItem(key) !== 'undefined') {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item): initialValue;
        
        // window.localStorage.setItem(key, JSON.stringify(initialValue));
        // return initialValue;
    });

    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));        
    };

    return [storedValue, setValue];
}