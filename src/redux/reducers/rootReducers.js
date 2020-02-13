import { combineReducers } from 'redux';
import user from './auth';
import channels from './home';
import vod from './vod'
const reducer = combineReducers({
    user,
    channels,
    vod
})

export default reducer;