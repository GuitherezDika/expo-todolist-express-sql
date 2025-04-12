import { View, Text } from 'react-native'
import React from 'react'
import { useAuth } from '@/context/AuthContext';
import { Redirect, Stack } from 'expo-router';

const index = () => {
    const { token, loading } = useAuth();
    if (token == null) {
        return (
            <Stack>
                <Stack.Screen name="login" options={{ headerShown: false }} />
                <Stack.Screen name="register" options={{ headerShown: false }} />
            </Stack>
        )
    } else {
        return (
            <Stack>
                <Stack.Screen
                    name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen
                    name="posts/[id]"
                    options={{ headerShown: false }} />
            </Stack>
        )
    }
}

export default index