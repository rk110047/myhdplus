import { GET_KIDS_CATEGORIES, GET_KIDS_CHANNELS, CHANGE_KIDS_NAVIGATION_STATUS } from "../action-types/kids";

const initial_state = {
    isLoading: true,
    kidsChannels: [],
    kidsCategories: [],
    selectedCategoryId: 1
  };

export default (state = initial_state, {type, payload}) => {
    switch (type) {
      case GET_KIDS_CHANNELS:
        return {
          ...state,
          kidsChannels: payload,
        };
     
      case GET_KIDS_CATEGORIES:
        let categoryResults = payload;
        categoryResults &&
          categoryResults.map((item, key) => {
            if (key) item.status = false;
            else item.status = true;
          });
        return {
          ...state,
          kidsCategories: payload,
          selectedCategoryId: payload[0].id,
        };
      case CHANGE_KIDS_NAVIGATION_STATUS:
        let newCategories = state.kidsCategories.map(item => {
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
          kidsCategories: newCategories,
          selectedCategoryId: payload,
        };
        
      default:
        return state;
    }
  };
  