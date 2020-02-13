import { GET_VOD_CATEGORIES, GET_VOD_CHANNELS, CHANGE_VOD_NAVIGATION_STATUS } from "../action-types/vod";

const initial_state = {
    isLoading: true,
    vodChannels: [],
    vodCategories: [],
    selectedCategoryId: 1
  };

export default (state = initial_state, {type, payload}) => {
    switch (type) {
      case GET_VOD_CHANNELS:
        return {
          ...state,
          vodChannels: payload,
        };
     
      case GET_VOD_CATEGORIES:
        let categoryResults = payload;
        categoryResults &&
          categoryResults.map((item, key) => {
            if (key) item.status = false;
            else item.status = true;
          });
        return {
          ...state,
          vodCategories: payload,
          selectedCategoryId: payload[0].id,
        };
      case CHANGE_VOD_NAVIGATION_STATUS:
        let newCategories = state.vodCategories.map(item => {
          if (item.id == payload) {
            return {
              ...item,
              status: true,
            };
          } else
            return {
              ...item,
              status: false,
            };
        });
        return {
          ...state,
          vodCategories: newCategories,
          selectedCategoryId: payload,
        };
        
      default:
        return state;
    }
  };
  