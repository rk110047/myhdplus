import {
    StyleSheet,
    Dimensions
} from "react-native";
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        // marginTop: 28,
        // marginBottom: 15,
        
        backgroundColor: '#d9d9d9',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    image: {
        resizeMode: 'contain',
        height: height * 6 / 100,
        width: width * 10 / 100
    },
    logo: {
        height: height * 8 / 100,
        width: width * 20 / 100,
        resizeMode: 'contain',
    },
    text: {
        // height: height * 8 / 100,
        // width: width*0.62,  
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: 'bold',
        // marginTop:width*0.05
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: height * 8 / 100,
        width: width * 0.80,
        marginRight:width*0.10
    }

});

export {
    styles
}