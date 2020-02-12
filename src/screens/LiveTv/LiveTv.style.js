import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex:1,
        height,
        justifyContent: 'center',
        alignItems: 'center',
        
        
    },
    navbar: {
        marginHorizontal: 14,
        height: height * 0.06,
        
    },
    activeNavbar: {
        marginHorizontal: 14,
        borderBottomWidth: 2,
        height: height * 0.06,
        borderColor: '#0d8ad2',
        paddingBottom:15
    },
    navContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: width,
        // marginHorizontal: 14,
        marginBottom:15,
        backgroundColor:"#d9d9d9",
 

    },
    navText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'normal',
        marginHorizontal:5
    },
    activeNavText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black',
        marginHorizontal:5

    },
    sportContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: width * 0.95,
        justifyContent: "space-between",
        alignItems: 'center',
        marginVertical:10
    },
    sportList:{
        flexDirection:'column',
        width:width*0.95,
        marginVertical:height*0.03
    },
    imageContainer:{
        width: width*0.30,
        height:72,
    },
    descriptionContainer:{
        width:width*0.61,
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
        fontSize: 12,
        marginVertical:4,

    },
    sportImage: {
        width: width*0.27,
        height: height*0.11,
        borderRadius: 8,
    }
})

export { styles };
