import { createContext, PropsWithChildren, useContext } from "react";
import { useStorageState } from "./useStorageState";


const AuthContext = createContext<{
    signIn: (token: string, refreshToken: string) => void;
    signOut: () => void;
    session?: string | null;
    refreshSession?: string | null;
    isLoading: boolean; 
}>({
    signIn: () => null,
    signOut: () => null,
    session: null,
    refreshSession: null,
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
    const [[isLoading, session, refreshSession], setSession] = useStorageState('session', 'refreshSession' )

    return (
        <AuthContext.Provider
            value={{
                signIn: (token, refreshToken) => setSession(token, refreshToken),
                signOut: () => setSession(null, null),
                session,
                refreshSession,
                isLoading
            }}
        >
            {children}
        </AuthContext.Provider>
    )
};