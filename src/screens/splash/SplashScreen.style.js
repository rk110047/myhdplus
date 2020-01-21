import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        height: null,
        width: null,
    },
    photo: {
        flex: 4,
        // height: 100,
        width: '50%',
        // backgroundColor: '#000',
        // alignItems: 'center',
        resizeMode: 'contain',
    },
    rest: {
        flex: 2,
    }
});

export {
    styles
}