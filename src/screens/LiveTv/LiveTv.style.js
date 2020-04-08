import {StyleSheet, Dimensions} from 'react-native';
import { ColorConst } from '../../utils/Constants';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    borderBottomWidth: 3,
    height: height * 0.06,
    borderColor: '#13a4f3',
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
    fontSize: 16,
    fontWeight: 'normal',
    marginHorizontal: 5,
  },
  activeNavText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
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
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  descriptionText: {
    color: '#FFFFFF',
    fontWeight: 'normal',
    fontSize: 12,
    marginVertical: 4,
  },
  sportImage: {
    width: width * 0.27,
    height: height * 0.11,
    borderRadius: 8,
  },
});

export {styles};
