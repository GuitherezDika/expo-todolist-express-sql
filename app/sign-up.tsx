import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import colors from './components/global'
import { router } from 'expo-router';
import {fetch} from 'expo/fetch'
import { signUpUser } from './data/services/authService';

const SignUp = () => {
    const [email, setEmail] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const createUser = async () => {
        let body = {
            username,
            email,
            password,
            role: username == 'admin' ? 'admin' : 'user'
        };
        setLoading(true);
        const response = await signUpUser(body);        
        const newUser = await response.json();
        if(response.status == 201){
            setLoading(false);
            Alert.alert(
                "Success",
                `${newUser?.message}`,
                [
                    {
                        text: 'OK',
                        onPress: () => router.replace('/sign-in'),
                        style: 'cancel',
                    },
                ]
            )
        }
    };

    const handleSignUp = () => {
        if (!email || !username || !password) {
            Alert.alert("Error", "Semua field harus diisi!")
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            Alert.alert('Error', 'Format email tidak valid');
            return;
        }
        createUser();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Buat Akun</Text>
            <TextInput
                placeholder="Email"
                style={styles.input}
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                placeholder="Username"
                style={styles.input}
                value={username}
                onChangeText={setUsername}
            />

            <TextInput
                placeholder="Password"
                style={styles.input}
                value={password}
                secureTextEntry
                onChangeText={setPassword}
            />
            <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            {loading ? <Text>...Loading</Text> : <></>}
            <TouchableOpacity onPress={() => router.push('/sign-in')}>
                <Text style={styles.linkText}>Sudah punya akun? Sign In</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 24,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: colors.ORANGE,
        marginBottom: 32,
        textAlign: 'center',
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 16,
        marginBottom: 16,
        backgroundColor: '#f9f9f9',
    },
    button: {
        backgroundColor: colors.ORANGE,
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
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