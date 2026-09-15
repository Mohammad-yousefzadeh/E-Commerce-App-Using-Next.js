"use client";

import { useEffect, useState } from "react";

const UseLocalStorage = <T>(
    key: string,
    initialValue: T | (() => T)
) => {
    const [value, setValue] = useState<T>(() => {
        if (typeof window === "undefined") {
            return typeof initialValue === "function"
                ? (initialValue as () => T)()
                : initialValue;
        }

        const jsonValue = localStorage.getItem(key);

        if (jsonValue === null) {
            return typeof initialValue === "function"
                ? (initialValue as () => T)()
                : initialValue;
        }

        return JSON.parse(jsonValue);
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);

    return [value, setValue] as [T, typeof setValue];
};

export default UseLocalStorage;