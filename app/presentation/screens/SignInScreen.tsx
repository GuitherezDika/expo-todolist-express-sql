import { useState } from "react";
import { useAuthViewModel } from "../viewmodels/useAuthViewModel";
import { KeyboardAvoidingView, Platform, SafeAreaView, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import colors from "@/app/components/global";
import { router } from "expo-router";

const SignInScreen: React.FC = () => {
    const { fetchLogin } = useAuthViewModel();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState<boolean>(false);

    const handleSignIn = async () => {
        try {
            setLoading(true)
            const res = await fetchLogin(username, password);
            if (res.status == 200) {
                setLoading(false)
                router.replace('/');
            }
        } catch (error) {
            setLoading(false)
            console.log('Error = ', error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS == 'ios' ? 'padding' : undefined}
                style={styles.innerContainer}
            >
                <Text style={styles.title}>Welcome Back!</Text>
                <TextInput
                    placeholder='Username'
                    style={styles.input}
                    value={username}
                    onChangeText={setUsername}
                />
                <TextInput
                    placeholder='Password'
                    style={styles.input}
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
                <TouchableOpacity style={styles.button} onPress={handleSignIn}>
                    <Text style={styles.buttonText}>Sign In</Text>
                    {loading && <Text>Loading ....</Text>}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => router.push('/sign-up')}>
                    <Text style={styles.linkText}>Belum punya akun? Register di sini</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    innerContainer: {
        flex: 1,
        paddingHorizontal: 24,
        justifyContent: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        color: colors.ORANGE,
        marginBottom: 32,
        alignSelf: 'center',
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 16,
        backgroundColor: '#f9f9f9',
    },
    button: {
        backgroundColor: colors.ORANGE,
        paddingVertical: 15,
        borderRadius: 10,
        marginTop: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16,
    },
    linkText: {
        marginTop: 20,
        textAlign: 'center',
        color: colors.ORANGE,
        fontWeight: '500',
    },
})