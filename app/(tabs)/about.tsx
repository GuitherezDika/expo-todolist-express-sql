import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const About = () => {
    const {name} = useLocalSearchParams();
    return (
        <View>
            <Text>About {name}</Text>
        </View>
    )
}

export default About

const styles = StyleSheet.create({})