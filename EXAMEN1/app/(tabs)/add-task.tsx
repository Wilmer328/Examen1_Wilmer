import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Alert, FlatList, Image } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'expo-router';

const AddTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { addTask, tasks } = useAuth();
  const router = useRouter();

  const handleAddTask = () => {
    if (!title || !description) {
      Alert.alert('Error', 'Por favor, completa todos los campos.');
      return;
    }

    addTask(title, description);
    setTitle('');
    setDescription('');
  };

  const handleGoBack = () => {
    router.replace('/home');
  };

  return (
    <View style={styles.container}>
      {/**/}
      <Image source={require('../../assets/images/Tareas.png')} style={styles.logo} />

      <Text style={styles.title}>Añadir Tarea</Text>

      {/**/}
      <TextInput
        style={styles.input}
        placeholder="Título de la tarea"
        value={title}
        onChangeText={setTitle}
        placeholderTextColor="#999"
      />
      <TextInput
        style={[styles.input, styles.descriptionInput]}
        placeholder="Descripción de la tarea"
        value={description}
        onChangeText={setDescription}
        multiline
        placeholderTextColor="#999"
      />
      <TouchableOpacity style={styles.button} onPress={handleAddTask}>
        <Text style={styles.buttonText}>Agregar Tarea</Text>
      </TouchableOpacity>

      {/* */}
      <Text style={styles.subtitle}>Tareas agregadas:</Text>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskCard}>
            <Image source={require('../../assets/images/pendiente.png')} style={styles.taskIcon} />
            <View style={styles.taskTextContainer}>
              <Text style={styles.taskTitle}>{item.title}</Text>
              <Text style={styles.taskDescription}>{item.description}</Text>
            </View>
          </View>
        )}
        contentContainerStyle={styles.list}
      />

      {/**/}
      <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
        <Text style={styles.backButtonText}>Volver a Bienvenidos</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f9fa',
  },
  logo: {
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
  descriptionInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#3498db',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 16,
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
  subtitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginTop: 16,
    marginBottom: 8,
  },
  list: {
    paddingBottom: 16,
  },
  taskCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  taskIcon: {
    width: 40,
    height: 40,
    marginRight: 12,
  },
  taskTextContainer: {
    flex: 1,
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  taskDescription: {
    fontSize: 14,
    color: '#7f8c8d',
    marginTop: 4,
  },
  backButton: {
    backgroundColor: '#e74c3c',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddTask;