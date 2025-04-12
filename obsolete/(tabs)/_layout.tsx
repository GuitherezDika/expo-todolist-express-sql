import { Stack, Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName = 'home';

                    if (route.name == 'index') iconName = 'home';
                    else if (route.name == 'about') iconName = 'information-circle';
                    else if (route.name == 'profile') iconName = 'person';

                    return <Ionicons name={iconName} size={size} color={color} />
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray'
            })}
        />
    )
}
