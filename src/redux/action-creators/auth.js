import axios from 'axios';
import {
    USER_LOGIN,
    USER_REGISTER
} from '../action-types/auth';


// the action creator to Register the user
export const userRegister = user => async (dispatch) => {
    const url = 'http://iptv-server-dev.us-west-2.elasticbeanstalk.com/api/v1/auth/register/';

    try {

        const registerRequest = await axios.post(url, user)
        return dispatch({type: USER_REGISTER, payload: registerRequest})
    } catch(error){
        console.log('errorssss',error.response)
    }
}

// the action creator to Login the user
export const userLogin = user => async (dispatch) => {
    const url = 'http://iptv-server-dev.us-west-2.elasticbeanstalk.com/api/v1/auth/login/';

    try {

        const loginRequest = await axios.post(url, user)
        return dispatch({type: USER_LOGIN, payload: loginRequest})
    } catch(error){
        console.log('errorssss',error.response)
    }
}