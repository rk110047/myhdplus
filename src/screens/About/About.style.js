import { StyleSheet, Dimensions } from "react-native";
import { ColorConst } from "../../utils/Constants";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        width,
        height,
        alignItems: 'center'
    },
    logo: {
        width: width*0.43,
        height: height*0.25,
        resizeMode: 'contain'
    },
    imageContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    },
    innerContainer:{
        flexDirection:'column',
        width:width*0.94,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        color:'#FFFFFF',
        fontSize: width > 600 ? 20 : 14,
        fontWeight:'normal',
        marginVertical:4
    },
    about:{
        color:'#FFFFFF',
        fontSize: width > 600 ? 22 : 18,
        fontWeight:'bold',
        marginVertical:10,
        marginTop:height*0.04
    },
    description:{
        color:'#FFFFFF',
        fontSize: width > 600 ? 20 : 14,
        fontWeight:'400',
        marginVertical:6,
        alignSelf:"flex-start"
    },
    line:{
        width:width*0.94,
        borderWidth:1.5,
        borderColor:ColorConst.themeColor,
        marginVertical:6
         
    }
})



export { styles };
