import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    poster: {
        width: width,
        minWidth: width,
        height: height * 0.40,
        position: 'absolute',
        // resizeMode:'cover',
        aspectRatio: 16 / 9

    },
    videoContainer: {
        // aspectRatio:16/9,
        display: 'flex',
        width: width,
        height: height * 0.40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    innerContainer: {
        width: width * 0.95,
    },
    titleContainer: {
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    download: {
        width: 28,
        height: 28
    },
    heading: {
        fontSize: 16,
        color: '#FFFFFF'
    },
    text: {
        marginVertical: 2,
        fontSize: 12,
        color: '#FFFFFF'
    },
    image: {
        width: 88,
        height: 88,
        borderRadius: 8
    },
    imageContainer: {
        width: width * 0.30
    },
    textContainer: {
        width: width * 0.65,
    },
    text2: {
        fontSize: 11,
        color: '#FFFFFF'
    },
    heading2: {
        fontSize: 14,
        color: '#FFFFFF'
    },
    line: {
        backgroundColor: '#FFC200',
        height: 2
    },
    viewText: {
        color:'#FFC200',
        fontSize:12
    },
    navbar: {
        marginHorizontal: 14,
        height: height * 0.06,
    },
    activeNavbar: {
        marginHorizontal: 14,
        borderBottomWidth: 2,
        height: height * 0.06,
        borderColor: '#FFC200'
    },
    navContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: width,
        marginHorizontal: 14,
        marginVertical:5

    },
    navText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'normal'
    },
    activeNavText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#FFFFFF'
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
    // imageContainer:{
    //     width: width*0.30,
    //     height:72,
    // },
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

export default styles;


