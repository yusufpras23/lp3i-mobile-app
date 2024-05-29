import { View, Text, StyleSheet } from 'react-native';
import { useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';


export default function SplashScreen({navigation}){
    useEffect(() => {   
        setTimeout(()=>{
        navigation.replace('Login')
        },5000);
        },[navigation])

    return (

        <LinearGradient colors={['#4c669f', '#3b5998' , '#192f6a']}
        style={styles.LinearGradient}
        >
        <View style={styles.textcontainer} >
          <Text style={styles.textsplash} >Facebook</Text>
        </View>
        </LinearGradient>
      );
}

const styles = StyleSheet.create ({
    LinearGradient: {
        flex:1
    },
    textcontainer: {
        flex:1,
        alignItems: 'center',
        justifyContent :'center'
    },
    textsplash: {
        color: 'white',
        fontSize: 50,
        fontWeight: 'bold'

    }
})