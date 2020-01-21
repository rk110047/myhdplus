import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#212121'
    },
    circle1:{
        height:280,
        width:280,
        borderRadius:280/2,
        display:'flex',
        backgroundColor:'#625B0C',
        alignItems:'center',
        justifyContent:'center'
    },
    circle2:{
        height:240,
        width:240,
        borderRadius:240/2,
        backgroundColor:'#AD9600',
        alignItems:'center',
        justifyContent:'center'
    },
    circle3:{
        backgroundColor:'#D4B400',
        height:200,
        width:200,
        borderRadius:200/2,
        alignItems:'center',
        justifyContent:'center'
    }, 
     circle4:{
        backgroundColor:'#FBD300',
        height:160,
        width:160,
        borderRadius:160/2
    },
    text:{
        color:'#FFFFFF',
        fontSize:24,
        fontWeight:'900',
        marginVertical:50,
        width:width*0.70,
        textAlign:'center'
    }
})

export {styles};