import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routs'

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#011327" barStyle="ligt-content" />
      <Routes/>
    </NavigationContainer>
  );
}

