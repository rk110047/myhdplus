import { StyleSheet, Dimensions } from "react-native";
import { ColorConst } from "../../utils/Constants";

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
        color: 'white'
    },
    titleText: {
        fontSize: width > 600 ? 22 : 16,
        color: '#ffffff',
        lineHeight: 23
    },
    titleBtn: {
        color: ColorConst.themeColor,
        fontSize: 12,
        lineHeight: 17,
    },

    contentContainer: {
        width: width * 0.95,
        marginBottom:20
    },
    navbar: {
        marginHorizontal: 14,
        height: height * 0.06,
      },
      activeNavbar: {
        marginHorizontal: 14,
        borderBottomWidth: 3,
        height: height * 0.06,
        borderColor: '#E64628',
        paddingBottom: 15,
      },
      navContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: "100%",
        // marginHorizontal: 14,
        marginBottom: 15,
        backgroundColor:ColorConst.backgroundColor ,
      },
      navText: {
        color: 'white',
        fontSize: width > 600 ? 22 : 16,
        fontWeight: 'normal',
        marginHorizontal: 5,
      },
      activeNavText: {
        fontWeight: 'bold',
        fontSize: width > 600 ? 22 : 18,
        color: '#E64628',
        marginHorizontal: 5,
      },
      sportContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: "90%",
        justifyContent: 'space-between',
        alignItems: 'center',
        // marginVertical: 10,
      },
      sportList: {
        flexDirection: 'column',
        width: "95%",
        marginVertical: height * 0.03,
      },
      imageContainer: {
        flex: 2,
        // height: 72,
      },
      descriptionContainer: {
        flex:3,
        height: 'auto',
      },
    
      titleText: {
        fontSize:  width > 600 ? 22 : 16,
        fontWeight: 'bold',
        color: '#FFFFFF',
      },
      descriptionText: {
        color: '#FFFFFF',
        fontWeight: 'normal',
        fontSize:  width > 600 ? 20 : 12,
        marginVertical: 4,
      },
      sportImage: {
        width: width * 0.27,
        height: height * 0.11,
        borderRadius: 8,
      },
   

});

export {
    styles
}