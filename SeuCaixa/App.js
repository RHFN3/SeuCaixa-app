
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routs';
import AuthProvider from './src/contexts/auth';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
      <Routes/>
      </AuthProvider>
    </NavigationContainer>
  );
};

