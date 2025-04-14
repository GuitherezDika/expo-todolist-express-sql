import { createContext, PropsWithChildren, useContext } from "react";
import { useStorageState } from "./useStorageState";


const AuthContext = createContext<{
    signInState: (token: string, refreshToken: string) => void;
    signOutState: () => void;
    session?: string | null;
    refreshSession?: string | null;
    isLoading: boolean; 
}>({
    signInState: () => null,
    signOutState: () => null,
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
                signInState: (token, refreshToken) => setSession(token, refreshToken),
                signOutState: () => setSession(null, null),
                session,
                refreshSession,
                isLoading
            }}
        >
            {children}
        </AuthContext.Provider>
    )
};