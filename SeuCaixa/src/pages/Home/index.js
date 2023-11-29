import { SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useContext } from 'react';

import { AuthContext } from '../../contexts/auth';
//sad

export default function Home(){
  const { name, user } = useContext(AuthContext)

  return (       
    <ScrollView style={styles.container}>
    <SafeAreaView>
      <Text>Tela principal</Text>
      <Text>Bem vindo {name}</Text>
      <Text>Email logado {user.email}</Text> 
    </SafeAreaView>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#d0e3ff",
    paddingStart: '5%',
    paddingEnd:"5%",
    paddingTop: '5%'
  }
})