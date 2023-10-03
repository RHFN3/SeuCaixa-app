import { SafeAreaView, StatusBar, View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ScrollView } from "react-native";
import { useState, useContext } from "react";
import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import Checkbox from 'expo-checkbox';
import { login } from "../../config/firebase";

import { useNavigation } from '@react-navigation/native';
import { AuthContext } from "../../contexts/auth";

export default function SignIn() {
    const navigation = useNavigation();
    const [isChecked, setIsChecked] = useState(false);
    const [isPasswordShown, setIsPasswordShown] = useState(true);
    const [email, setEmail] = useState ('');
    const [password, setPassword] = useState ('');
    
    const {signIn} = useContext(AuthContext);

    function handleLogin(){
        signIn(email, password)
    }



    return (
        <ScrollView style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={200} style={styles.containerHeader}>
                <Text style={styles.message}>Bem-vindo(a)</Text>
            </Animatable.View >

        <Animatable.View animation="fadeInUp" delay={500} style={{backgroundColor: "#FFF", paddingStart:'5%', paddingEnd:'5%', borderRadius:35}}>
        <View>
        <Text style={{fontSize: 25, fontWeight:'bold', marginTop:15}}>Login</Text>
        <Text style={{fontSize: 20, marginTop: 28,}}>Email</Text>
        <TextInput
        placeholder="Digite um email..."
        keyboardType="email-address"
        value={email}
        onChangeText={(text) => setEmail(text)}
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
        onChangeText={(text) => setPassword(text)}
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
        onPress={() => navigation.navigate('Home') }>
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

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
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
                </Animatable.View>
                </ScrollView>
            )
};


//"#d0e3ff"


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#d0e3ff",
    },
    containerHeader:{
        marginTop: '5%',
        marginBottom: '8%',
    },
    message:{
        color: "#4C60FA",
        fontSize: 28,
        fontWeight: 'bold',
        paddingStart: '5%'
    },
    input:{
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 16,
    },
    button:{
        backgroundColor:"#4C60FA",
        width: "100%",
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 50,
        justifyContent:'center',
        alignItems: 'center',
        elevation: 8
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