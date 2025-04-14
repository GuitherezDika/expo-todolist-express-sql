import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useSession } from '@/context/ctx'

const index = () => {
    const {signOutState, session, refreshSession} = useSession();

    return (
        <View>
            <Text style={{marginBottom: 14}}>index session = {session}</Text>
            <Text>index refreshSession = {refreshSession}</Text>

            <Text onPress={signOutState}>LOGOUT</Text>
        </View>
    )
}

export default index