
import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    channelContainer: {
        flexDirection: 'row',
        marginVertical: 16,
        width: width * 0.95,
    },
    channel: {
        height: height * 11 / 100,
        width: width * 26.6 / 100,
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        // opacity: 1,
        marginRight: 16
    },
    image:{
        height: height * 11 / 100,
        width: width * 26.6 / 100, 
        resizeMode:'contain'
    }
})

export {styles}