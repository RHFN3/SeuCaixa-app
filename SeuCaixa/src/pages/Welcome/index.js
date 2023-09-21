
import { 
    View, 
    Text, 
    StyleSheet,
    Image,
    TouchableOpacity,
 } from "react-native";

 import * as Animatable from 'react-native-animatable';

 import { useNavigation } from '@react-navigation/native'


export default function Welcome() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Animatable.Image
                animation="flipInY"
                source={require('../../assets/logo.jpg')}
                style={{width: "100%"}}
                resizeMode="contain"
                
                />
            </View>

            <Animatable.View delay={800} animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Acompanhe o caixa da sua loja de onde estiver</Text>
                <Text style={styles.text}>Faça o login para começar</Text>

                <TouchableOpacity 
                style={styles.button}
                onPress={ () => navigation.navigate('SignIn')}
                >
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>

            </Animatable.View>


        </View>
    )
};


const styles = StyleSheet.create ({
    container:{
        flex: 1,
        backgroundColor: "#011327"
    },
    containerLogo:{
        flex: 2,
        backgroundColor: "#011327",
        justifyContent: 'center',
        alignItems: 'center',

    },
    containerForm: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',

    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 24,
        marginBottom: 12,
    },
    text:{
        color: "#a5a5a5"
    },
    button:{
        position: 'absolute',
        backgroundColor: "#011327",
        borderRadius: 50,
        paddingVertical: 8,
        width: "60%",
        alignSelf: "center",
        bottom: "15%",
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    buttonText:{
        color:"#FFF",
        fontSize: 18,
    }
})