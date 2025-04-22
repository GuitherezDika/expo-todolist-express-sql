import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { useSession } from '@/context/ctx'
import { useAuthViewModel } from '../presentation/viewmodels/useAuthViewModel'

const index = () => {
    const { fetchSignout } = useAuthViewModel();
    const { signOutState, session, refreshSession } = useSession();
    const [loading, setLoading] = useState<boolean>(false);

    const handleSignout = async () => {
        try {
            setLoading(true);
            const body = {
                token: session,
                refreshToken: refreshSession
            };
            const res = await fetchSignout(body);
            if (res.status == 200) {
                signOutState();
                setLoading(false);
            }
        } catch (error) {
            setLoading(false)
            console.log(error);
        } finally {
            setLoading(false)
        }
    }

    return (
        <View>
            <Text style={{ marginBottom: 14 }}>index session = {session}</Text>
            <Text>index refreshSession = {refreshSession}</Text>

            <Text onPress={handleSignout}>LOGOUT</Text>
        </View>
    )
}

export default index