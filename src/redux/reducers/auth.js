import {
    USER_LOGIN,
    USER_REGISTER
} from '../action-types/auth';

const initial_state = {
    user:{}
};

export default (state = initial_state, { type, payload}) => {
    switch(type) {
        case USER_REGISTER:
            return {
                ...state,
                user: payload
            }
        
        case USER_LOGIN:
            return {
                ...state,
                user: payload
            }
        default:
            return state;
    }
}