import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container:{
        display:'flex',
        alignItems: 'center',
        justifyContent:'center'
    },
    textInput:{
        height:height*0.08,
        width:width*0.90,
        borderRadius:8,
        backgroundColor:'#FFFFFF',
        paddingHorizontal:24,
        color:'#212121',
        marginVertical:10
    },
    submitContainer:{
        display:'flex',
        backgroundColor:'#FFC200',
        height:height*0.08,
        width:width*0.90,
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center',
        marginVertical:5
    },
    submit:{
        color:'#FFFFFF',
        fontSize:16,
        fontWeight:'400'
    },
    otp:{
        color:'#FFFFFF',
        fontWeight:'400',
        fontSize:12,
        marginVertical:10
    },
    text:{
        color:'#FFFFFF',
        fontSize:14,
        fontWeight:'400',
        marginVertical:5,
        marginBottom:10
    }
})

export {styles}