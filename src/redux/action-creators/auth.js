import {USER_LOGIN, USER_REGISTER} from '../action-types/auth';
import QueryUtil from '../../utils/QueryUtil';
import AsyncStorage from '@react-native-community/async-storage';
import Toast from 'react-native-simple-toast';
import { Alert } from 'react-native';

// the action creator to Register the user
export const userRegister = (user, navigation) => async dispatch => {
  user.email=user.email.toLowerCase()
  QueryUtil.postWithoutToken('/auth/register/', user)
    .then(response => {
      if (response.status) {
        const email_id = response.data.data.user.email
        Toast.show('Register Successfull!', Toast.LONG);
        dispatch({type: USER_REGISTER, payload: response.data});
        navigation.navigate('Login');
      } else {
        Toast.show('Registration Error!', Toast.LONG);
      }
    })
    .catch(err => {
      const {data}=err.response
      if(data.errors && data.errors.email){
        // Alert.alert("ECNTV",data.errors.email[0]?data.errors.email[0]:"Server Error")
      }
      else if(data.errors && data.errors.password){
        Alert.alert("ECNTV",data.errors.password[0]?data.errors.password[0]:"Server Error")
      }
      else if(data.errors && data.errors.passwords){
        Alert.alert("ECNTV",data.errors.passwords[0]?data.errors.passwords[0]:"Server Error")
      }
      else if(data.errors && data.errors.confirmed_password){
        Alert.alert("ECNTV",data.errors.confirmed_password[0]?data.errors.confirmed_password[0]:"Server Error")

      }
      else{
        // alert(err.toString());

      }
    });
};

// the action creator to Login the user
export const userLogin = (user, navigation) => async dispatch => {
  // user.email=user.email.toLowerCase()
  QueryUtil.postWithoutToken('/hd+/auth/', user)
    .then(response => {
      if (response.data.status == 200) {
        AsyncStorage.setItem('api_token', response.data.token);
        AsyncStorage.setItem('hd_plus_number', user.hd_plus_number);
        response.data.mobile_number != null ?
       ( navigation.navigate('Main') ,
        AsyncStorage.setItem('number_verified', "verified!") )
        :
        navigation.navigate('Mobile_verification')
        dispatch({type: USER_LOGIN, payload: response.data})
      } else {
        alert('Please Check Login Credentials');
      }
    })
    // .catch(err => {
    //   const {data}=err.response
    //   if(data.errors && data.errors.password){
    //     Alert.alert("GibFibre",data.errors.password[0]?data.errors.password[0]:"Server Error")
    //   }
    //  else if(data.errors && data.errors.invalid){
    //     Alert.alert("GibFibre",data.errors.invalid[0]?data.errors.invalid[0]:"Server Error")
    //   }
    //   else{
    //     alert(err.toString());

    //   }

    // });
};
