import { View, Text } from 'react-native'
import React from 'react'
import { useSession } from '@/ctx'

const index = () => {
    const {signOut} = useSession()
    return (
        <View>
            <Text>index</Text>

            <Text onPress={signOut}>LOGOUT</Text>
        </View>
    )
}

export default index