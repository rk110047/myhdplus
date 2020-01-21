import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    videoContainer: {
        display: 'flex',
        width: width * 0.95,
        height: height * 0.32,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
    },
    poster: {
        width: width * 0.95,
        height: height * 0.32,
        borderRadius: 15,
    },
    rowContainer: {
        width: width * 0.95,
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        color: 'white',
    },
    titleText: {
        fontSize: 16,
        color: '#ffffff',
        lineHeight: 23
    },
    titleBtn: {
        color: '#FFC200',
        fontSize: 12,
        lineHeight: 17,
    },

    contentContainer: {
        width: width * 0.95,
        marginBottom:20
    },
   

});

export {
    styles
}