import { Stack } from "expo-router";
import { Ionicons } from '@expo/vector-icons';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="posts/[id]"
        options={{ headerShown: false }} />
    </Stack>
  )
}
