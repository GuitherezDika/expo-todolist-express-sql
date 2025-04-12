import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const PostDetail = () => {
    const { id } = useLocalSearchParams();
    return (
        <View>
            <Text>PostDetail ID: {id}</Text>
        </View>
    )
}

export default PostDetail

const styles = StyleSheet.create({
    center: { flex: 1, justifyContent: 'center', alignItems: 'center' }
})