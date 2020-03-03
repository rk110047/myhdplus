import { GET_RADIO_CATEGORIES, GET_RADIO_CHANNELS, CHANGE_RADIO_NAVIGATION_STATUS } from "../action-types/radio";

const initial_state = {
    isLoading: true,
    radioChannels: [],
    radioCategories: [],
    selectedCategoryId: 1
  };

export default (state = initial_state, {type, payload}) => {
    switch (type) {
      case GET_RADIO_CHANNELS:
        return {
          ...state,
          radioChannels: payload,
        };
     
      case GET_RADIO_CATEGORIES:
        let categoryResults = payload;
        categoryResults &&
          categoryResults.map((item, key) => {
            if (key) item.status = false;
            else item.status = true;
          });
        return {
          ...state,
          radioCategories: payload,
          selectedCategoryId: payload[0].id,
        };
      case CHANGE_RADIO_NAVIGATION_STATUS:
        let newCategories = state.radioCategories.map(item => {
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
          radioCategories: newCategories,
          selectedCategoryId: payload,
        };
        
      default:
        return state;
    }
  };
  