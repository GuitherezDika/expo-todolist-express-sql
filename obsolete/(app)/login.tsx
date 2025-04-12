import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useAuth } from '../../context/AuthContext'
import { useRouter } from 'expo-router';

const Login = () => {

    // const { token } = useAuth();
    // const router = useRouter();

    // useEffect(() => {
    //     if (token) router.replace('/')
    // }, [token])

    return (
        <View>
            <Text>Login</Text>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({})