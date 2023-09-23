import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, TextInput, Image, } from "react-native";
import { useState } from "react";
import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

import { useNavigation } from '@react-navigation/native';

export default function SignIn() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={200} style={styles.containerHeader}>
                <Text style={styles.message}>Bem-vindo(a)</Text>
            </Animatable.View>


            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
                
                <View>
                <Text style={{fontSize: 20, marginTop: 28,}}>Email</Text>
                <TextInput
                placeholder="Digite um email..."
                keyboardType="email-address"
                style={{
                    borderBottomWidth: 1,
                    height: 40,
                    marginBottom: 12,
                    fontSize: 16,}}
                />
                </View>

                <View>
                <Text style={{fontSize: 20, marginTop: 28,}}>Senha</Text>
                </View>

                <View>
                <TextInput
                placeholder="Digite sua senha..."
                secureTextEntry
                style={{
                    borderBottomWidth: 1,
                    height: 40,
                    marginBottom: 12,
                    fontSize: 16,}}
                />
                    <TouchableOpacity style={{position:'absolute', right: 12}}>
                        <Ionicons name="eye-off" size={24}/>
                    </TouchableOpacity>
                </View>
                
                <TouchableOpacity style={{position:'absolute', marginTop:210, right:22}}>
                    <Text style={{fontSize: 16}}>Esqueceu a senha?</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
                

                <TouchableOpacity 
                style={styles.buttonRegister}
                onPress={ () => navigation.navigate('Register')}
                >
                    <Text style={styles.buttonRegisterText}>Não possui uma conta? Cadastre-se</Text>
                </TouchableOpacity>

                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        alignSelf: 'center',
                        justifyContent:'center',
                        paddingTop: 20,
                        paddingBottom: 20,
                    }}>
                        Ou
                </Text>
                <View style={{flexDirection: 'row', justifyContent:'space-between', paddingStart: '10%', paddingEnd:'10%'}}>
                    <TouchableOpacity style={{
                    width:50, 
                    height:50, 
                    alignItems:'center', 
                    justifyContent:'center',
                    }}>  
                    <Image 
                    source={require('../../components/google.png')} 
                    style={{width:40, height:40, resizeMode:'contain'}}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                    width:50, 
                    height:50, 
                    alignItems:'center', 
                    justifyContent:'center',
                    }}>
                    <Image 
                    source={require('../../components/facebook.png')} 
                    style={{width:40, height:40, resizeMode:'contain'}}/>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={{
                    width:50, 
                    height:50, 
                    alignItems:'center', 
                    justifyContent:'center',
                    }}>
                    <Image 
                    source={require('../../components/apple.png')} 
                    style={{width:40, height:40, resizeMode:'contain'}}/>
                    </TouchableOpacity>
                </View>
            </Animatable.View >

        </SafeAreaView>
    )
};





const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#011327",
    },
    containerHeader:{
        marginTop: '14%',
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
    input:{
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    button:{
        backgroundColor:"#011327",
        width: "100%",
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 40,
        justifyContent:'center',
        alignItems: 'center',

    },
    buttonText:{
        color: "#FFF",
        fontSize: 18,
        //fontWeight: 'bold'
    }, 
    buttonRegister:{
        marginTop: 20,
        alignSelf: 'center'
    },
    buttonRegisterText:{
        color:"#888C90",
        fontSize: 16,
    }
})