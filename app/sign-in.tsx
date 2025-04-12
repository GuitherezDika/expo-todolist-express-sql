import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useSession } from '@/context/ctx'
import { router } from 'expo-router';

const SignIn = () => {
    const { signIn } = useSession();
    return (
        <View style={style.container}>
            <Text onPress={() => {
                signIn('dika');
                router.replace('/');
            }}>
                sign-in
            </Text>
        </View>
    )
}

export default SignIn;

const style = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' }
})