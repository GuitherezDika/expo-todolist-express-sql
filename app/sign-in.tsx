import { View, Text, StyleSheet, SafeAreaView, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { useSession } from '@/context/ctx'
import { router } from 'expo-router';
import colors from './components/global';
import { signInUser } from './data/services/authService';

const SignIn = () => {
    const { signIn } = useSession();
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const onSignInUser = async () => {
        const url= 'http://192.168.0.106:3000/auth/login';
        let body = {
            username,
            password
        }
        setLoading(true);
        const response = await signInUser(body);
        const newLogin = await response.json();

        if(response.status == 200) {
            setLoading(false);
            signIn(newLogin.accessToken, newLogin.refreshToken);
            router.replace('/');
        } else {
            setLoading(false);
            Alert.alert('Gagal Login', 'Silahkan login ulang!')
        }
    }

    const handleSignIn = () => {
        if(!username || !password) {
            Alert.alert("Error", "Semua field harus diisi!");
            return;
        }
        onSignInUser();
    }
    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS == 'ios' ? 'padding': undefined}
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
                </TouchableOpacity>
                <TouchableOpacity onPress={() => router.push('/sign-up')}>
                    <Text style={styles.linkText}>Belum punya akun? Register di sini</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default SignIn;

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