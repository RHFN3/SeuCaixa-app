
import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from "react-native";
import * as Animatable from 'react-native-animatable';

import LottieView from "lottie-react-native";
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect, useRef } from "react";


export default function Welcome() {
    const navigation = useNavigation();
    const animation = useRef(null);


    return (
        <View style={styles.container}>
        <StatusBar backgroundColor="#67E4FF" barStyle="ligt-content" />
            <View style={styles.containerLogo}>
                <LottieView
                    source={require('../../assets/logo.json')}
                    autoPlay={true}
                    loop={false}
                    ref={animation}
                />
            </View>

                <TouchableOpacity 
                style={styles.button}
                onPress={ () => navigation.navigate('SignIn')}>
                <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                style={styles.button2}
                onPress={ () => navigation.navigate('Register')}>
                <Text style={styles.buttonText2}>Registre-se</Text>
                </TouchableOpacity>


         </View>
    )
};

/*
            <Animatable.View delay={1000} animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Acompanhe o caixa da sua loja de onde estiver</Text>
                <Text style={styles.text}>Faça o login para começar</Text>
            </Animatable.View>
*/

const styles = StyleSheet.create ({
    container:{
        flex: 1,
        backgroundColor: "#67E4FF"
    },
    containerLogo:{
        flex: 2,
        justifyContent:"flex-start",
        alignItems: 'center',
        marginTop: -200
    },
    button:{
        position: 'absolute',
        backgroundColor: "#E79C88",
        borderRadius: 50,
        width: "80%",
        height: "8%",
        alignSelf: "center",
        bottom: "20%",
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        elevation: 5
    },
    buttonText:{
        color:"#4C60FA",
        fontSize: 20,
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: "bold",
    },
    button2:{
        position: 'absolute',
        borderRadius: 50,
        borderColor: "#4C60FA",
        borderWidth: 5,
        width: "80%",
        height: "8%",
        alignSelf: "center",
        bottom: "10%",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#67E4FF',
        elevation: 5
    },
    buttonText2:{
        color:"#4C60FA",
        fontSize: 20,
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: "bold",
    },
})