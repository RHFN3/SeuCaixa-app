import { View, Text } from "react-native-animatable";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Register(){
    return(
        <SafeAreaView style={{flex: 1, backgroundColor: "#011327"}}>
            <View>
                <Text style={{
                    color: "#FFF",
                    fontSize: 25,
                // fontWeight: 'bold',
                    marginStart: '5%',
                    marginTop: '5%',

                }}> 
                    Crie sua conta </Text>
            </View>

            <View style={{marginBottom: 12}}>
                <Text style={{
                    color: "#FFF",
                    fontSize: 16,
                    fontWeight: 400,
                    marginStart: '5%',
                }}>Email </Text>

                <View>

                </View>
            </View>

        </SafeAreaView>
    )


};