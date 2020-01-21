import {USER_LOGIN, USER_REGISTER} from '../action-types/auth';
import QueryUtil from '../../utils/QueryUtil';
import AsyncStorage from '@react-native-community/async-storage';
import {NavigationActions} from 'react-navigation';

// the action creator to Register the user
export const userRegister = user => async dispatch => {
  QueryUtil.postWithoutToken('/auth/register/', user)
    .then(response => {
      if (response.status == 200) {
        return dispatch({type: USER_REGISTER, payload: response.data});
      }
    })
    .catch(err => {
      console.log('error', err);
    });
};

// the action creator to Login the user
export const userLogin = (user, navigation) => async dispatch => {
  QueryUtil.postWithoutToken('/auth/login/', user)
    .then(response => {
      if (response.status == 200) {
        AsyncStorage.setItem('api_token', response.data.data.user.token);
        navigation.navigate('Main');
        dispatch({type: USER_LOGIN, payload: response.data});
      } else {
        alert('please login again');
      }
    })
    .catch(err => {
      console.log('error', err);
    });
};
