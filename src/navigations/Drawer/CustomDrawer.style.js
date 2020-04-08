import { StyleSheet, Dimensions } from "react-native";
import { ColorConst } from "../../utils/Constants";

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    logo:{
        height:height*10/100,
         width: width*52/100,
         resizeMode:'contain',
         marginVertical:30
    },
    logoContainer:{
        justifyContent: 'center',
        backgroundColor:ColorConst.backgroundColor
    },
    innerContainer: {
        flexDirection: 'row',
        display: 'flex',
        paddingVertical: height * 3 / 100,
        marginHorizontal: width * 0.01,
        alignItems: 'center',
    },
    header: {
        color: '#581400',
        fontSize: 14,
        fontWeight: 'bold'
    },
    innerHeader: {
        fontSize: 12,
        color: '#581400',
        fontWeight: '400'
    },
    listName: {
        marginHorizontal: width * 0.05,
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '400'
    },
    activeListName: {
        // fontWeight: 'bold',
        color: ColorConst.themeColor
    },
    // activeContainer: {
    //     paddingLeft: 14,
    //     marginLeft: width * 2.8 / 100,
    //     marginRight: width * 2.8 / 100,
    //     backgroundColor: '#FFF2CB'
    // },
    inactiveImage: {
        tintColor: '#FFFFFF',
        width: width * 0.09,
        height: height * 0.04
    },
    activeImage: {
        tintColor: ColorConst.themeColor,
        width: width * 0.09,
        height: height * 0.04
    }
})

export default styles;