import {
  GET_CHANNELS,
  GET_RECOMMENDED_VIDEOS,
  GET_ARCHIVED_VIDEOS,
  GET_CATEGORIES,
  GET_HOME_SETTINGS,
  CHANGE_FAVOURITE_CHANNELS,
  GET_USER_PROFILE_SETTINGS,
  GET_PACKAGES,
} from '../action-types/home';
import QueryUtil from '../../utils/QueryUtil';
import store from '../store';
import AsyncStorage from '@react-native-community/async-storage';
// the action creator to get the channels.
export const getChannels = () => async dispatch => {
  QueryUtil.get('/livetv/channels?limit=1000')
    .then(async response => {
      console.log('response in channels', response);

      if (response.status == 200){
        await dispatch({type: GET_CHANNELS, payload: response.data.results});
        dispatch(getProfileSettings())
      }
    })
    .catch(err => {
      console.log('error in getting channels', err);
    });
};

// the action creator to Login the user
export const getVideos = token => async dispatch => {
  QueryUtil.get('/archives/')
    .then(response => {
      console.log('response in videos', response);

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
  QueryUtil.get('/livetv/categories/?limit=100')
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
      if (response.status == 200) {
        dispatch({type: GET_HOME_SETTINGS, payload: response.data.results});
      }
    })
    .catch(err => {
      console.log('error in getting channels', err);
    });
};
export const getProfileSettings = () => async dispatch => {
  QueryUtil.get('/auth/profile/')
    .then(response => {
      console.log('response in user profile', response);
      if (response.status == 200) {
        const profileData=response.data.data
        if(profileData && profileData.profile){
          if(profileData.profile.package){
            QueryUtil.get('/packages/')
            .then(response => {
              if(response.status==200){
                const {results}=response.data
               let userPackage= results && results.filter((item)=>item.id===profileData.profile.package)
               console.log({userPackage})
               dispatch({
                        type: GET_PACKAGES,
                        payload: userPackage,
                      });
              }
              console.log('response in packages', response);
            })
          }
        }
        dispatch({
          type: GET_USER_PROFILE_SETTINGS,
          payload: profileData,
        });
      }
    })
    .catch(err => {
      console.log('error in getting profile settings', err);
    });
};
export const getAllFavourites = () => async dispatch => {
  let favouritesList = await AsyncStorage.getItem('favourites');
  favouritesList = JSON.parse(favouritesList);
  if (favouritesList)
    dispatch({
      type: CHANGE_FAVOURITE_CHANNELS,
      payload: favouritesList,
    });
};
export const addToFavourites = data => async dispatch => {
  let newFavouritesList = store.getState().channels.favouriteChannels;
  await newFavouritesList.push(data);
  AsyncStorage.setItem('favourites', JSON.stringify(newFavouritesList));
  dispatch({type: CHANGE_FAVOURITE_CHANNELS, payload: newFavouritesList});
};
export const removeFromFavourites = data => async dispatch => {
  let newFavouritesList = store.getState().channels.favouriteChannels;
  newFavouritesList =
    newFavouritesList &&
    newFavouritesList.length > 0 &&
    newFavouritesList.filter(item => item.id !== data.id);
  AsyncStorage.setItem('favourites', JSON.stringify(newFavouritesList));
  dispatch({type: CHANGE_FAVOURITE_CHANNELS, payload: newFavouritesList});
};
