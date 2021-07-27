import QueryUtil from "../../utils/QueryUtil";
import { GET_KIDS_CHANNELS, GET_KIDS_CATEGORIES } from "../action-types/kids";

export const getkidsChannels = () => async dispatch => {
    QueryUtil.get('/kids/channels?limit=100')
      .then(response => {
        console.log("kids",response.data)
        if (response.status == 200)
          dispatch({type: GET_KIDS_CHANNELS, payload: response.data});
      })
      .catch(err => {
        console.log('error in getting channels', err);
      });
  };
  
  export const getkidsCategories = token => async dispatch => {
    QueryUtil.get('/kids/categories/')
      .then(response => {
        console.log(response.data,"naughty")
        if (response.status == 200) {
          dispatch({type: GET_KIDS_CATEGORIES, payload: response.data.results});
        }
      })
      .catch(err => {
        console.log('error in getting channels', err);
      });
  };