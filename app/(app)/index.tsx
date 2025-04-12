import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useSession } from '@/context/ctx'

const index = () => {
    const {signOut, session, refreshSession} = useSession();

    return (
        <View>
            <Text style={{marginBottom: 14}}>index session = {session}</Text>
            <Text>index refreshSession = {refreshSession}</Text>

            <Text onPress={signOut}>LOGOUT</Text>
        </View>
    )
}

export default index