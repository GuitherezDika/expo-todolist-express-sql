// import { AuthProvider } from "@/context/authContext";
import { Redirect, Stack } from "expo-router";
import { ActivityIndicator, View } from "react-native";
import { useAuth } from '../../context/AuthContext';

export default function LayoutWrapper() {
    const { token, loading } = useAuth();

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size="large" />
            </View>
        )
    }

    return (
        <Stack>
            <Stack.Screen
                name="(tabs)" options={{ headerShown: false }} />
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

// export function RootLayout() {
//   return (
//     <AuthProvider>
//       <LayoutWrapper />
//     </AuthProvider>
//   )
// }

// export default function Root() {
//     return (
//         <AuthProvider>
//             <Slot />
//         </AuthProvider>
//     )
// }