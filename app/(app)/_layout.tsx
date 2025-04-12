
import { Text } from 'react-native'
import React from 'react'
import { useSession } from '@/ctx'
import { Redirect, Stack } from 'expo-router';

const _layout = () => {
    const { session, isLoading } = useSession();
    
    if (isLoading) return <Text>... Loading</Text>
    if (!session) {
        return <Redirect href={'/sign-in'} />
    }

    return <Stack />
}

export default _layout