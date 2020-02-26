import {USER_LOGIN, USER_REGISTER} from '../action-types/auth';
import QueryUtil from '../../utils/QueryUtil';
import AsyncStorage from '@react-native-community/async-storage';
import Toast from 'react-native-simple-toast';

// the action creator to Register the user
export const userRegister = (user, navigation) => async dispatch => {
  QueryUtil.postWithoutToken('/auth/register/', user)
    .then(response => {
      if (response.status) {
        Toast.show('Registration Successful!', Toast.LONG);
        dispatch({type: USER_REGISTER, payload: response.data});
        navigation.navigate('Login');
      } else {
        Toast.show('Registration Error!', Toast.LONG);
      }
    })
    .catch(err => {
      alert(err.toString());
    });
};

// the action creator to Login the user
export const userLogin = (user, navigation) => async dispatch => {
  QueryUtil.postWithoutToken('/auth/login/', user)
    .then(response => {
      console.log("user Login",response)
      if (response && response.data && response.status == 200) {
        AsyncStorage.setItem('api_token', response.data.data.user.token);
        navigation.navigate('Main');
        dispatch({type: USER_LOGIN, payload: response.data});
      } else {
        alert('please login again');
      }
    })
    .catch(err => {
      alert(err.toString());
      console.log('error', err);
    });
};
