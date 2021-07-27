import {StyleSheet, Dimensions} from "react-native";
import { ColorConst } from "../../../utils/Constants";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0F2D41',
        alignItems: 'center',
        justifyContent: 'center',
    },
    formContainer:{
        flex: 1,
    },
    logo:{
        width:160,
        height:151,
        resizeMode:"contain"
    },
    textInput: {
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        opacity: 1,
        width: 363,
        height:52,
        textAlign:'left',
        paddingLeft:48,
        fontSize:width > 600 ? 20 : 14,
        marginBottom:16,
    },
    textInputBtn:{
        borderRadius: 8,
            opacity: 1,
            width: 363,
            height: 52,
        backgroundColor: ColorConst.themeColor,
        alignItems:'center',
        justifyContent:'center',
        marginBottom: 16,
    },
    btnText :{
        fontSize:width > 600 ? 20 : 18,
        color:'white'
    },
    linkText:{
        textAlign:'center',
        color:'#ffffff',
        fontSize:width > 600 ? 20 : 16,
        marginBottom: 16,
    },
    linkText2:{
        textAlign: 'center',
            color: ColorConst.themeColor,
            fontSize: width > 600 ? 20 : 16,
    }

});

export {
    styles
}