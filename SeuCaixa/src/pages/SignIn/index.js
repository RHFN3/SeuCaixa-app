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
        <ScrollView style={styles.backContainer}> 
        <Animatable.View animation="fadeInDown" delay={200}  style={styles.containerForm}>
            <Animatable.View style={styles.containerHeader}>
                <Text style={styles.message}>Bem-vindo(a)</Text>
                <Animatable.View style={styles.containerBody}>

                </Animatable.View>
            </Animatable.View >

            
        </Animatable.View>
        </ScrollView>
    )
};


//"#d0e3ff"


const styles = StyleSheet.create({
    backContainer:{
        flex: 1,
        backgroundColor: "#A0C0FC",
    },
    containerHeader:{
        marginTop: '5%',
        marginBottom: '8%',
        paddingStart: '5%',
        backgroundColor: "#d0e3ff"
    },
    message:{
        color: "#4C60FA",
        fontSize: 28,
        fontWeight: 'bold',
    },
    containerForm:{
        //flex: 1,
        backgroundColor: "#d0e3ff",
        borderBottomRightRadius: 100,
        paddingStart: '5%',
        paddingEnd: '5%',
        elevation: 3
    },
    containerBody:{
        flex: 1,
        backgroundColor: "#fff",
        marginStart: "15%"
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
        elevation: 5
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