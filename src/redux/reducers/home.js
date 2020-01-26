import {
  GET_CHANNELS,
  GET_RECOMMENDED_VIDEOS,
  GET_ARCHIVED_VIDEOS,
  GET_CATEGORIES,
  CHANGE_LIVETV_NAVIGATION_STATUS,
} from '../action-types/home';

const initial_state = {
  isLoading: true,
  channels: [],
  recVideos: [],
  archVideos: [],
  categories: [],
  selectedCategoryId: 1,
};

export default (state = initial_state, {type, payload}) => {
  switch (type) {
    case GET_CHANNELS:
      return {
        ...state,
        channels: payload,
      };

    case GET_RECOMMENDED_VIDEOS:
      return {
        ...state,
        recVideos: payload,
      };
    case GET_ARCHIVED_VIDEOS:
      let archivedResults=payload;
      archivedResults && archivedResults.map((item)=>{
        item.channel_image='https://www.rapidtvnews.com/images/2019/Mar_2019/Star-Sports-logo_6_March_2019.png'
        item.channel_url=item.video_url
      })
      return {
        ...state,
        archVideos: payload,
      };
    case GET_CATEGORIES:
      let categoryResults = payload;
      categoryResults &&
        categoryResults.map((item, key) => {
          if (key) item.status = false;
          else item.status = true;
        });
      return {
        ...state,
        categories: payload,
        selectedCategoryId: payload[0].id,
      };
    case CHANGE_LIVETV_NAVIGATION_STATUS:
      let newCategories = state.categories.map(item => {
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
        categories: newCategories,
        selectedCategoryId: payload,
      };
    default:
      return state;
  }
};
