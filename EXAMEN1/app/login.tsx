import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'expo-router';

const Login = () => {
  const [email, setEmail] = useState('');
  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = () => {
    const isLoggedIn = login(email);
    if (isLoggedIn) {
      router.replace('/home'); 
    }
  };

  return (
    <View style={styles.container}>
      {/*  */}
      <Image source={require('../assets/images/USER.jpg')} style={styles.userIcon} />

      <Text style={styles.title}>Iniciar Sesión</Text>

      {/*  */}
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        placeholderTextColor="#999"
      />

      {/* */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f8f9fa',
  },
  userIcon: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#3498db',
    borderWidth: 2,
    marginBottom: 16,
    paddingHorizontal: 12,
    borderRadius: 10,
    backgroundColor: '#fff',
    fontSize: 16,
    color: '#2c3e50',
  },
  button: {
    backgroundColor: '#3498db',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Login;