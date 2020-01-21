import { combineReducers } from 'redux';
import user from './auth';
import channels from './home';

const reducer = combineReducers({
    user,
    channels
})

export default reducer;