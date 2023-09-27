import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from "react";
import Checkbox from 'expo-checkbox';
import * as Animatable from 'react-native-animatable';
import auth from "../../config/firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { useNavigation } from '@react-navigation/native';


export default function Register() {
    const navigation = useNavigation();
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [isChecked, setIsChecked] = useState(false);  
    const [email, setEmail] = useState ('');
    const [password, setPassword] = useState ('');

    return (
        <SafeAreaView style={styles.container}>
            <Animatable.View animation="fadeInDown" delay={200} style={styles.title}>
                <Text style={styles.message}>Crie sua conta</Text>
            </Animatable.View>


            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
                
                <View style={{marginBottom:12, marginTop:20}}>
                    <Text>Nome e sobrenome</Text>
                </View>

                <View style={{
                    width: '100%',
                    height: 45,
                    borderColor: "#000",
                    borderWidth: 1,
                    borderRadius: 8,
                    justifyContent:'center',
                    paddingLeft: 22
                }}>
                    <TextInput 
                    placeholder="Digite seu nome"
                    style={{
                        width:"100%"
                    }}
                    />
                </View>

                <View style={{marginBottom:12, marginTop:20}}>
                    <Text>E-mail</Text>
                </View>

                <View style={{
                    width: '100%',
                    height: 45,
                    borderColor: "#000",
                    borderWidth: 1,
                    borderRadius: 8,
                    justifyContent:'center',
                    paddingLeft: 22
                }}>
                    <TextInput 
                    placeholder="Digite seu email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType='email-address'
                    style={{
                        width:"100%"
                    }}
                    />
                </View>

                <View style={{marginBottom:12, marginTop:20}}>
                    <Text>Senha</Text>
                </View>

                <View style={{
                    width: '100%',
                    height: 45,
                    borderColor: "#000",
                    borderWidth: 1,
                    borderRadius: 8,
                    justifyContent:'center',
                    paddingLeft: 22
                }}>
                    <TextInput 
                    placeholder="Digite sua senha"
                    secureTextEntry={isPasswordShown}
                    value={password}
                    onChangeText={setPassword}
                    style={{
                        width:"100%"
                    }}
                    />
                <TouchableOpacity style={{position:'absolute', right: 12}} onPress={()=>setIsPasswordShown(!isPasswordShown)}>
                {
                        isPasswordShown == true ? (
                            <Ionicons name="eye" size={24}/>
                        ) : (
                            <Ionicons name="eye-off" size={24}/>
                        )
                    }
                </TouchableOpacity>
                </View>

                <View style={{flexDirection: 'row', marginVertical:16}}>
                    <Checkbox
                    style={{marginRight: 8}}
                    value={isChecked}
                    onValueChange={setIsChecked}
                    />
                    <Text>Concordo com os termos de uso</Text>
                </View>

                <View style={{marginTop:10}}>
                    <TouchableOpacity style={{
                        backgroundColor:"#011327",
                        width: "100%",
                        height: 45,
                        borderRadius: 4,
                        marginTop: 20,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}onPress={ () => navigation.navigate('SignIn')}>
                        
                        <Text style={{color:'white', fontSize: 20}}>Registrar</Text>
                    </TouchableOpacity>
                </View>

            </Animatable.View>

        </SafeAreaView>
    )
};


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#011327",
    },
    title:{
        marginTop: '10%',
        marginBottom: '8%',
        paddingStart: '5%',
    },
    message:{
        color: "#FFF",
        fontSize: 28,
        fontWeight: 'bold',
    },
    containerForm:{
        flex: 1,
        backgroundColor: "#FFF",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
})