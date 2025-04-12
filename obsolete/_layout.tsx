// import { AuthProvider } from "@/context/authContext";
import { Slot, Stack } from "expo-router";
import { ActivityIndicator, View } from "react-native";
import { useAuth, AuthProvider } from '../context/AuthContext';

function LayoutWrapper() {
  const { token, loading } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  // return <Slot />
  return (
    <Stack>
      {token === null && loading == false ? (
        <>
          <Stack.Screen name="login" options={{ headerShown: false }} />
          <Stack.Screen name="register" options={{ headerShown: false }} />
        </>
      ) : (
        <>
          <Stack.Screen
            name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="posts/[id]"
            options={{ headerShown: false }} />
        </>
      )}
    </Stack>
  )
}

export default function Root () {
  return (
    <AuthProvider>
      <Slot />
    </AuthProvider>
  )
}