import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'column',
        backgroundColor:'#212121',
        justifyContent:'center' ,
        alignItems:'center'
    },
    popularContainer: {
        flexDirection: 'row',
        width: width * 0.95,
        justifyContent: "space-between",
        alignItems: 'center',
        marginBottom: 20,
    },
    innerContainer: {
        width: width * 0.40,
        borderRadius: 8,
        justifyContent:'center',
    
    },
    videoImage: {
        width: width*0.42,
        height:height*0.14,
        borderRadius: 8,
        // resizeMode: 'cover',
        position: 'relative'
    },
    playIcon: {
        width: 32,
        height: 32,
        position: 'absolute',
        top: 29,
         left: 64
    },
    descripContainer: {
        width: width * 0.48,
        flexDirection: 'column',
        justifyContent: 'center',
        height:'auto'
    },
    title: {
        color: 'white',
        fontSize: 16
    },
    date: {
        color: 'white',
        fontSize: 9
    },
    description: {
        textAlign: 'justify',
        fontSize: 11,
        color: 'white',
        marginTop: 5
    }

});

export {
    styles
}