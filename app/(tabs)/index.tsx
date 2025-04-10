import { Link, router } from "expo-router";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text >Todo List:</Text>
      <Link style={styles.title} href='/profile'> Ke Halaman Profile </Link>
      <Link style={styles.title} href={{ pathname: '/about', params: {name: 'Dika'}}}> Ke Halaman About with param </Link>
      <Link style={styles.title} href='/posts/456'> Ke Halaman Post 123 </Link>
      <Button title="Lihat Post 123" onPress={() => router.push('/posts/123')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 24
  },
})