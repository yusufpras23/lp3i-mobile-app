import { 
    View, 
    Text, 
    StyleSheet, 
    ScrollView,
    Alert
} from "react-native";  
import {useState} from 'react'
import { 
    CustomeInput,
    FbButton
} from '../../components'
import { useSelector, useDispatch } from 'react-redux'
import { setPassword } from '../../store/reducer/registerReducer'

export default function RegisterInputPasswordScreen({navigation}){
    const [confirmPassword, setConfirmPassword] = useState(null)
    const register = useSelector((state) => state.register.formInput)
    const dispatch = useDispatch()

    const onNextInput = () =>{
        try{
            
            if( register.password === null || register.password === ""){
                throw Error('password is required')
            }

            if( confirmPassword === null ||  confirmPassword === ""){
                throw Error('Confirm password is required')
            }

            if( confirmPassword !== register.password){
                throw Error(`Confirm password doesn't match`)
            }

            //navigation.navigate("RegisterDate")
        }catch(err){
            Alert.alert('Error', err.message, [
              {text: 'OK', onPress: () => {
                console.log('ERR')
              }},
            ]);
        }
        

    }

    return(
        <ScrollView style={styles.container}>
            <Text style={styles.textHeader}>Create a password</Text>
            <Text>Create a password with at least 6 letters or numbers. It should be something that others can't guess.</Text>
            
            <View style={styles.containerInput}>
                <CustomeInput 
                    value={register.password}
                    onChangeText={(value)=>dispatch(setPassword(value))}
                    label="Password"/>
                
                <CustomeInput 
                    value={confirmPassword} 
                    onChangeText={(value)=>setConfirmPassword(value)}
                    label="Confirm Password"/>
            </View>

            <FbButton title="Preview data" onPress={onNextInput}/>
            
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container:{
        padding:15
    },
    containerInput:{
        marginTop:20,
        marginBottom:20
    },
    textHeader:{
        fontWeight:'700',
        fontSize:24,
    },
    
})