import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

export default function Index() {
  const router = useRouter();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true); // Marca que el componente está listo
  }, []);

  useEffect(() => {
    if (isReady) {
      router.replace('/login'); // Redirige a /login solo cuando el componente esté listo
    }
  }, [isReady]);

  return (
    <View>
      <Text>Cargando...</Text>
    </View>
  );
}