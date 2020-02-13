import { GET_VOD_CHANNELS, GET_VOD_CATEGORIES } from "../action-types/vod";
import QueryUtil from "../../utils/QueryUtil";

export const getvodChannels = () => async dispatch => {
    QueryUtil.get('/vods/contents?limit=100')
      .then(response => {
        if (response.status == 200)
          dispatch({type: GET_VOD_CHANNELS, payload: response.data.results});
      })
      .catch(err => {
        console.log('error in getting channels', err);
      });
  };
  
  export const getvodCategories = token => async dispatch => {
    QueryUtil.get('/vods/categories/')
      .then(response => {
        if (response.status == 200) {
          dispatch({type: GET_VOD_CATEGORIES, payload: response.data.results});
        }
      })
      .catch(err => {
        console.log('error in getting channels', err);
      });
  };