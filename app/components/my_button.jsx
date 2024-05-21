import { 
    Image,
    Touchable,
    Dimensions,
    Text,
    StyleSheet }
from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
const windowWidth = Dimensions.get('window').width;
export const MyButton=(props)=>{
    return(
        <TouchableOpacity style = {[styles.container, props.style]}>
            <Image
                style={styles.iconStyle}
                source={props.imgUrl}
            />
            <Text>{props.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:10,
        width: windowWidth  * 0.43,
        borderColor:'#e1e6ed',
        backgroundColor:'#d8e2f2',
        borderWidth:0.5,
        borderRadius:5,
        flexDirection:'row',
        justifyContent:'center'
    },

    iconStyle :{
        marginRight:5,
        width:20,
        height:20,
        resizeMode:'center'
    }
})