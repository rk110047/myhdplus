import QueryUtil from "../../utils/QueryUtil";
import { GET_RADIO_CHANNELS, GET_RADIO_CATEGORIES } from "../action-types/radio";

export const getradioChannels = () => async dispatch => {
    QueryUtil.get('/radio/channels?limit=100')
      .then(response => {
        if (response.status == 200)
          dispatch({type: GET_RADIO_CHANNELS, payload: response.data.results});
      })
      .catch(err => {
        console.log('error in getting channels', err);
      });
  };
  
  export const getradioCategories = token => async dispatch => {
    QueryUtil.get('/radio/categories/')
      .then(response => {
        if (response.status == 200) {
          dispatch({type: GET_RADIO_CATEGORIES, payload: response.data.results});
        }
      })
      .catch(err => {
        console.log('error in getting channels', err);
      });
  };