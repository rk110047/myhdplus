import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#212121',
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
        fontSize:14,
        marginBottom:16,
    },
    textInputBtn:{
        borderRadius: 8,
            opacity: 1,
            width: 363,
            height: 52,
        backgroundColor: '#FFC200',
        alignItems:'center',
        justifyContent:'center',
        marginBottom: 16,
    },
    btnText :{
        fontSize:18,
        color:'white'
    },
    linkText:{
        textAlign:'center',
        color:'#ffffff',
        fontSize:14,
        marginBottom: 16,
    },
    linkText2:{
        textAlign: 'center',
            color: '#FFC200',
            fontSize: 16,
    }

});

export {
    styles
}