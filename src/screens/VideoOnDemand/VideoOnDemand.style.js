import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    categoryContainer: {
        width: width * 0.94,
        height: 184,
        marginBottom:20,
        
    },
    category: {
        width: width * 0.94,
        height: 188,
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10, 

    },
    backgroundImage: {
        width: width * 0.94,
        height: 188,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
    },
    categoryText:{
        color:'white'
    }

})

export { styles }