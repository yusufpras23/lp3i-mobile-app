import { 
    View, 
    Text, 
    StyleSheet, 
    ScrollView,
    Alert
} from "react-native";  
import { 
    CustomeInput,
    FbButton
} from '../../components'
import { useSelector, useDispatch } from 'react-redux'
import { sethDate } from '../../store/reducer/registerReducer'
export default function RegisterInputDateScreen({navigation}){
    const register = useSelector((state) => state.register.formInput)
    const dispatch = useDispatch()

    const onNextInput = () =>{
        try{
            
            if( register.birthDate === null || register.birthDate === ""){
                throw Error('Birth Date is required')
            }

            navigation.navigate("RegisterGender")
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
            <Text style={styles.textHeader}>What's your date of birth?</Text>
            <Text>Choose your date of birth. You can Always make this private later.why do I need to pr</Text>
            
            <View style={styles.containerInput}>
                <CustomeInput 
                    value={register.birthDate}
                    onChangeText={(value)=>dispatch(sethDate(value))}   
                    label="Date of Birth"/>
                
                
            </View>

            <FbButton title="Next" onPress={onNextInput}/>
            
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