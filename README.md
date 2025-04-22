app/
├── _layout.tsx                 # Root layout (cek token & redirect)
├── signin.tsx                  # Sign In screen
├── signup.tsx                  # Sign Up screen

├── (tabs)/                     # Authenticated area
│   ├── _layout.tsx             # Tab layout
│   ├── home.tsx                # Home Tab
│   ├── feed.tsx                # Feed Tab
│   ├── profile.tsx             # Profile Tab

├── detail/
│   └── [id].tsx                # Detail screen (navigasi dinamis)

======================================
app/_layout.tsx

import { Slot, useRouter } from 'expo-router';
import { useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';

export default function RootLayout() {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const token = await SecureStore.getItemAsync('access_token');
      if (!token) {
        router.replace('/signin');
      } else {
        router.replace('/(tabs)/home');
      }
    };
    checkAuth();
  }, []);

  return <Slot />;
}

=====================================
 app/signin.tsx dan signup.tsx

 // app/signin.tsx
import SignInScreen from '../presentation/screens/SignInScreen';
export default SignInScreen;


// app/signup.tsx
import SignUpScreen from '../presentation/screens/SignUpScreen';
export default SignUpScreen;

===============================
app/(tabs)/_layout.tsx

import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="home" options={{ title: 'Home' }} />
      <Tabs.Screen name="feed" options={{ title: 'Feed' }} />
      <Tabs.Screen name="profile" options={{ title: 'Profile' }} />
    </Tabs>
  );
}

================================
app/(tabs)/home.tsx, feed.tsx, profile.tsx


// app/(tabs)/home.tsx
import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeTab() {
  const router = useRouter();
  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="Go to Detail" onPress={() => router.push('/detail/42')} />
    </View>
  );
}

===================================
app/detail/[id].tsx

// app/detail/[id].tsx
import { useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native';

export default function DetailScreen() {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>Detail for item ID: {id}</Text>
    </View>
  );
}


=====================================
navigasi ke tab
router.replace('/(tabs)/feed');

navigasi ke detail dari mana aja
router.push('/detail/123');

=====================================