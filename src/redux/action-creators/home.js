import {
  GET_CHANNELS,
  GET_RECOMMENDED_VIDEOS,
  GET_ARCHIVED_VIDEOS,
  GET_CATEGORIES,
  GET_HOME_SETTINGS,
} from '../action-types/home';
import QueryUtil from '../../utils/QueryUtil';

// the action creator to get the channels.
export const getChannels = () => async dispatch => {
  QueryUtil.get('/livetv/channels?limit=100')
    .then(response => {
      if (response.status == 200)
        dispatch({type: GET_CHANNELS, payload: response.data.results});
    })
    .catch(err => {
      console.log('error in getting channels', err);
    });
};

// the action creator to Login the user
export const getVideos = token => async dispatch => {
  QueryUtil.get('/archives/')
    .then(response => {
      if (response.status == 200 && response.data.results) {
        let recVideos = [];
        let arcVideo = [];
        response.data.results.map(video => {
          if (video.video_type === 'VD') {
            recVideos.push(video);
          }
          arcVideo.push(video);
        });
        dispatch({type: GET_RECOMMENDED_VIDEOS, payload: recVideos});
        dispatch({type: GET_ARCHIVED_VIDEOS, payload: arcVideo});
      }
    })
    .catch(err => {
      console.log('error in getting channels', err);
    });
};
export const getCategories = token => async dispatch => {
  QueryUtil.get('/livetv/categories/')
    .then(response => {
      if (response.status == 200) {
        dispatch({type: GET_CATEGORIES, payload: response.data.results});
      }
    })
    .catch(err => {
      console.log('error in getting channels', err);
    });
};
export const getHomeSettings = () => async dispatch => {
  QueryUtil.get('/settings/home/')
    .then(response => {
      console.log("response",response)
      if (response.status == 200) {
        dispatch({type: GET_HOME_SETTINGS, payload: response.data.results});
      }
    })
    .catch(err => {
      console.log('error in getting channels', err);
    });
}; 