import { combineReducers } from 'redux';
import user from './auth';
import channels from './home';
import vod from './vod'
import radio from "./radio"
import kids from "./kids"
const reducer = combineReducers({
    user,
    channels,
    vod,
    radio,
    kids
})

export default reducer;