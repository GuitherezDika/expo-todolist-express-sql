import { createContext, useContext } from "react";


const AuthContext = createContext<{
    signIn: () => void;
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
}