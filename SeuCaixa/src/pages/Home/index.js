import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react';

import { AuthContext } from '../../contexts/auth';


export default function Home(){
  const { name, user } = useContext(AuthContext)

  return (       
    <SafeAreaView>
          <Text>Tela principal</Text>
          <Text>Bem vindo {name}</Text>
          <Text>Email logado {user.email}</Text>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({})