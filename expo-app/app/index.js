import { Link } from 'expo-router';
import { View, Text, Button } from 'react-native';

export default function Home() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 16 }}>
      <Text style={{ marginBottom: 20, textAlign: 'center' }}>
        Bem-vindo ao Sistema de Gerenciamento de Pacientes
      </Text>
      <Link href="/login" asChild>
        <Button title="Ir para Login" />
      </Link>
    </View>
  );
}
