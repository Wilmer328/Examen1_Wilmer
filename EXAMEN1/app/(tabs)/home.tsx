import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'expo-router';

const Home = () => {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.replace('/login'); 
  };

  const handleAddTask = () => {
    router.push('/add-task'); 
  };

  return (
    <View style={styles.container}>
      {/*  */}
      <Image
        source={require('../../assets/images/bienvenido.png')} 
        style={styles.welcomeImage}
        resizeMode="contain" 
      />

      {/* */}
      <Text style={styles.welcomeText}>¡Hola, {user}!</Text>

      {/* */}
      <TouchableOpacity style={styles.addTaskButton} onPress={handleAddTask}>
        <Text style={styles.buttonText}>Añadir Tarea</Text>
      </TouchableOpacity>

      {/*  */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.buttonText}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f8f9fa',
  },
  welcomeImage: {
    width: '80%', 
    height: 200, 
    marginBottom: 20, 
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 24,
    textAlign: 'center',
  },
  addTaskButton: {
    backgroundColor: '#3498db', 
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 25, 
    alignItems: 'center',
    marginBottom: 16, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  logoutButton: {
    backgroundColor: '#e74c3c', 
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 25, 
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Home;