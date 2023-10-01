
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import Routes from './src/routs';
import AuthProvider from './src/contexts/auth';
import React from 'react';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
      <StatusBar backgroundColor="#d0e3ff" barStyle="ligt-content" />
      <Routes/>
      </AuthProvider>
    </NavigationContainer>
  );
};

