import { createContext, useContext, useEffect, useState } from "react"
import AsyncStorage from '@react-native-async-storage/async-storage'
import { router } from "expo-router";

type AuthContextType = {
    signIn: (param: string) => void;
    signOut: () => void;
    token: string | null;
    loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>({
    signIn: () => null,
    signOut: () => null,
    token: null,
    loading: false,
});

export const AuthProvider = ({ children }: any) => {
    const [token, setToken] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadToken = async () => {
            const savedToken = await AsyncStorage.getItem('token');
            if (savedToken) setToken(savedToken);
            setLoading(false)
        };
        loadToken();
    }, []);

    const signIn = async (newToken: string) => {
        await AsyncStorage.setItem("token", newToken);
        setToken(newToken);
        router.replace('/')
    };

    const signOut = async () => {
        await AsyncStorage.removeItem("token");
        setToken(null);
    }

    return (
        <AuthContext.Provider value={{ signIn, signOut, token, loading }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);