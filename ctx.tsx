import { createContext, PropsWithChildren, useContext } from "react";
import { useStorageState } from "./useStorageState";


const AuthContext = createContext<{
    signIn: (data: string) => void;
    signOut: () => void;
    session?: string | null;
    isLoading: boolean; 
}>({
    signIn: () => null,
    signOut: () => null,
    session: null,
    isLoading: false
});

export function useSession () {
    const value = useContext(AuthContext);
    if(process.env.NODE_ENV !== 'production') {
        if (!value) {
            throw new Error (`Use session must be wrapped in <SessionProvider />`)
        } 
    }

    return value;
}

export function SessionProvider({children}: PropsWithChildren) {
    const [[isLoading, session], setSession] = useStorageState('session')

    return (
        <AuthContext.Provider
            value={{
                signIn: (token) => setSession(token),
                signOut: () => setSession(null),
                session,
                isLoading
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}