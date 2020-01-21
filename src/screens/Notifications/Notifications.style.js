import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


const styles = StyleSheet.create({
    container:{
       display:'flex',
       alignItems:'center',
       justifyContent: 'flex-start',
    },
    notificationContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: width * 0.95,
        justifyContent: "space-between",
        alignItems: 'center',
        marginVertical:10
    },
   
    imageContainer:{
        width: width*0.20,
        height: height*0.11,
    },
    descriptionContainer:{
        width:width*0.60,
        height:'auto'
    },
  
    titleText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
    descriptionText: {
        color: '#FFFFFF',
        fontWeight: 'normal',
        opacity:0.8,
        fontSize: 12,
        marginVertical:4,

    },
    image: {
        width: width*0.20,
        height: height*0.11,
        borderRadius: 8,
    },
    starImage:{
        height:16,
        width:16,
        resizeMode:'contain',
        tintColor:'white',
    },
    starContainer:{
        height:'auto',
        width:width*0.05
    },
    activeImage:{
        tintColor:'#FFC200',
        height:21,
        width:21,
        resizeMode:'contain',
    }
})


export default styles;