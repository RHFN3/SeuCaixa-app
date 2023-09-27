import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ScrollView } from "react-native";
import { useState } from "react";
import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import Checkbox from 'expo-checkbox';
import { login } from "../../config/firebase";

import { useNavigation } from '@react-navigation/native';

export default function SignIn() {
    const navigation = useNavigation();
    const [isChecked, setIsChecked] = useState(false);
    const [isPasswordShown, setIsPasswordShown] = useState(true);
    const [email, setEmail] = useState ('');
    const [password, setPassword] = useState ('');

    return (
        <ScrollView>
        <SafeAreaView style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={200} style={styles.containerHeader}>
                <Text style={styles.message}>Bem-vindo(a)</Text>
            </Animatable.View>

            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
                
                <View>
                <Text style={{fontSize: 25, fontWeight:'bold', marginTop:15}}>Login</Text>
                <Text style={{fontSize: 20, marginTop: 28,}}>Email</Text>
                <TextInput
                placeholder="Digite um email..."
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
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
                value={password}
                onChangeText={setPassword}
                secureTextEntry={isPasswordShown}
                style={{
                    borderBottomWidth: 1,
                    height: 40,
                    marginBottom: 12,
                    fontSize: 16,}}
                />

                <TouchableOpacity style={{position:'absolute', right: 12}} onPress={()=>setIsPasswordShown(!isPasswordShown)}>
                    {
                        isPasswordShown == false ? (
                            <Ionicons name="eye-off" size={24}/>
                        ) : (
                            <Ionicons name="eye" size={24}/>
                        )
                    }
                </TouchableOpacity>
                
                </View>
                
                <TouchableOpacity style={{position:'absolute', marginTop:270, right:22}}
                onPress={() => navigation.navigate('TelaPrincipal') }>
                    <Text style={{fontSize: 15}}>Esqueceu a senha?</Text>
                </TouchableOpacity>

                <View style={{flexDirection: 'row', marginVertical:6}}>
                    <Checkbox
                    style={{marginRight: 8}}
                    value={isChecked}
                    onValueChange={setIsChecked}
                    />
                    <Text>Manter conectado</Text>
                </View>

                <TouchableOpacity style={styles.button} onPress={() => login(email, password)}>
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
                <Text style={{
                    color:"#888C90",
                    fontSize: 16,
                    alignSelf: 'center',
                    justifyContent:'center',
                    paddingBottom: 20
                    }}>Faça o login com</Text>

                <View style={{flexDirection: 'row', justifyContent:'space-between', paddingStart: '10%', paddingEnd:'10%', marginBottom:10}}>
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
        </ScrollView>
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
        marginTop: 50,
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