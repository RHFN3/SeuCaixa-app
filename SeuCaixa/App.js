import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routs';
import AuthProvider from './src/contexts/auth';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#55C7A6" barStyle="ligt-content" />
      <AuthProvider>
      <Routes/>
      </AuthProvider>
    </NavigationContainer>
  );
};

