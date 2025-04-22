
import { Text } from 'react-native'
import React from 'react'
import { useSession } from '@/context/ctx'
import { Redirect, Stack, useRouter } from 'expo-router';

const _layout = () => {
    const { session, isLoading } = useSession();
    const router = useRouter();
    
    if (isLoading) return <Text>... Loading</Text>
    if (!session) {
        return <Redirect href={'/sign-in'} />
    }

    return <Stack />
}

export default _layout