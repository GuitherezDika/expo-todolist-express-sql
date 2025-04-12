import { useCallback, useEffect, useReducer } from "react";
import * as SecureStore from 'expo-secure-store';

type UseStateHook<T> = [
    [boolean, T | null, T | null], 
    (value: T | null, refresh: T | null) => void
];

function useAsyncState<T>(
    initialValue: [boolean, T | null, T | null] = [true, null, null]
): UseStateHook<T> {
    return useReducer(
        (
            state: [boolean, T | null, T | null],
            action: [T | null, T | null] // function save session, dan refreshSession
        ): [boolean, T | null, T | null] => [false, action[0], action[1]],
        initialValue
    ) as UseStateHook<T>
}

export async function setStorageItemAsync(key: string, value: string | null) {
    if (value == null) {
        await SecureStore.deleteItemAsync(key)
    } else {
        await SecureStore.setItemAsync(key, value)
    }
}

export function useStorageState(
        sessionKey: string, 
        refreshSessionKey: string
    ): UseStateHook<string> {
    // Public
    const [state, setState] = useAsyncState<string>();

    // Set
    const setValue = useCallback(
        (sessionValue: string | null, refreshSessionValue: string | null) => {
            setState([sessionValue, refreshSessionValue]);
            setStorageItemAsync(sessionKey, sessionValue);
            setStorageItemAsync(refreshSessionKey, refreshSessionValue)
        },
        [sessionKey, refreshSessionKey]
    )
    // Get
    useEffect(() => {
        const fetchStorage = async () => {
            const sessionData = await SecureStore.getItemAsync(sessionKey);
            const refreshSessionData = await SecureStore.getItemAsync(refreshSessionKey);
            setState([sessionData, refreshSessionData]);
        }

        fetchStorage();
    }, [sessionKey, refreshSessionKey])


    return [state, setValue];
}