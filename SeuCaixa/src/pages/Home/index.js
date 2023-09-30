import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react';

import { AuthContext } from '../../contexts/auth';


export default function Home(){
  const { name, user } = useContext(AuthContext)

  return (       
    <SafeAreaView style={{flex:1, backgroundColor:"#a4a4a4"}}>
    <SafeAreaView style={{backgroundColor:"#FFF", width:"50%", height:"50%",flexDirection:'row'}}>  
 
        <View style={{position:'absolute',marginTop:450}}>
          <Text>Tela principal</Text>
          <Text>Bem vindo {name}</Text>
          <Text>Email logado {user.email}</Text>
        </View>  
    </SafeAreaView>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({})