import { StyleSheet, Dimensions } from "react-native";
import { ColorConst } from "../../utils/Constants";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: width * 0.90,
        marginVertical: 10
    },
    text: {
        fontSize: width > 600 ? 22 : 18,
        fontWeight: '400',
        color: '#FFFFFF'
    },
    clickImage: {
        width: width * 0.12,
        height: height * 0.03,
        borderRadius: width / 2,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        // alignItems: 'flex-start'

    },
    innerImage: {
        height: height * 0.03,
        width: 20,
        borderRadius: 10,
        backgroundColor: ColorConst.themeColor,
        borderWidth: 1,
        borderColor: '#FFFFFF'
    },
    changeContainer: {
        marginVertical: 24,
        flexDirection: 'row',
        width: width * 0.90,
    },
    icon: {
        width: width > 600 ? 30 : 24,
        height: width > 600 ? 30 : 24,
        resizeMode: 'contain',
        marginRight: width * 0.06
    },
    dialogContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    dialogHeading: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 18
    },
    dialogPara: {
        color: '#FFFFFF',
        fontWeight: '400',
        fontSize: 16,
        marginVertical: 20,

    },
    dialog: {
        backgroundColor: '#313131',
        borderRadius: 8,
    },
    discard: {
        color: '#212121',
        fontSize: 14,
        fontWeight: 'normal'
    },
    enable: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: 'normal'
    },
    box: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 24
    },
    box1: {
        backgroundColor: '#F5F5F5',
        borderRadius: 8,
        width: width * 0.35,
        height: height * 0.07,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 11,
    },
    box2: {
        backgroundColor: ColorConst.themeColor,
        borderRadius: 8,
        width: width * 0.35,
        height: height * 0.07,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 11,
    },
    box3: {
        backgroundColor: ColorConst.themeColor,
        borderRadius: 8,
        width: width * 0.45,
        height: height * 0.07,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        fontSize:25,
        fontWeight:'bold',
        alignItems:'center',
        color:'white',
        // borderColor: 'white',
        marginHorizontal: 10,
        borderBottomWidth: 1,
        width:width*0.10,
        justifyContent:'center'    
    },
    textInputContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    wrongPin:{
        color:'#FF0000',
        fontSize:12,
        fontWeight:'400'
    },
    textInputBtn:{
        borderRadius: 8,
            opacity: 1,
            width: "35%",
            height: 52,
        backgroundColor: ColorConst.themeColor,
        alignItems:'center',
        justifyContent:'center',
        marginBottom: 16,
    },
    btnText :{
        fontSize:width > 600 ? 20 : 18,
        color:'white'
    }



})

export { styles }