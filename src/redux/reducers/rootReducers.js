import { combineReducers } from 'redux';
import user from './auth';
import channels from './home';
import vod from './vod'
import radio from "./radio"
const reducer = combineReducers({
    user,
    channels,
    vod,
    radio
})

export default reducer;