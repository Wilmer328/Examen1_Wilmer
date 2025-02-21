import React, { createContext, useContext, useState } from 'react';

interface Task {
  id: string;
  title: string;
  description: string;
}

interface AuthContextType {
  user: string | null;
  tasks: Task[];
  login: (email: string) => void;
  logout: () => void;
  addTask: (title: string, description: string) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]);

  const login = (email: string) => {
    if (email.endsWith('@gmail.com')) {
      setUser(email);
      return true; 
    } else {
      alert('Solo se permiten correos de dominio @gmail.com');
      return false; 
    }
  };

  const logout = () => {
    setUser(null);
    setTasks([]); 
  };

  const addTask = (title: string, description: string) => {
    const newTask = {
      id: Date.now().toString(), 
      title,
      description,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]); 
  };

  return (
    <AuthContext.Provider value={{ user, tasks, login, logout, addTask }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
};