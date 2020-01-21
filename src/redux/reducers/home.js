import {
    GET_CHANNELS,
    GET_RECOMMENDED_VIDEOS,
    GET_ARCHIVED_VIDEOS,
    GET_CATEGORIES
} from '../action-types/home';

const initial_state = {
    isLoading:true,
    channels:[]
};

export default (state = initial_state, { type, payload}) => {
    switch(type) {
        case GET_CHANNELS:
            return {
                ...state,
                channels: payload
            }
        
        case GET_RECOMMENDED_VIDEOS:
            return {
                ...state,
                recVideos: payload
            }
            case GET_ARCHIVED_VIDEOS:
                return {
                    ...state,
                    archVideos: payload
                }
            case GET_CATEGORIES:
                return {
                    ...state,
                    categories: payload
                }
        default:
            return state;
    }
}