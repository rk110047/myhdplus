import {
  GET_CHANNELS,
  GET_RECOMMENDED_VIDEOS,
  GET_ARCHIVED_VIDEOS,
  GET_RECORD_VIDEOS,
  GET_CATEGORIES,
  GET_CATEGORIES_HOME,
  CHANGE_LIVETV_NAVIGATION_STATUS,
  GET_HOME_SETTINGS,
  ADD_NEW_FAVOURITES,
  CHANGE_FAVOURITE_CHANNELS,
  GET_PACKAGES,
  GET_USER_PROFILE_SETTINGS,
} from '../action-types/home';

const initial_state = {
  isLoading: true,
  channels: [],
  recVideos: [],
  archVideos: [],
  recordVideos: [],
  categories: [],
  selectedCategoryId: 1,
  homeSettings:{},
  favouriteChannels:[],
  userPackage:{},
  userProfile:{}
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
        item.channel_image=item.logo_image
        item.channel_url=item.video_url
      })
      return {
        ...state,
        archVideos: archivedResults,
      };
      case GET_RECORD_VIDEOS:
      let recordResults=payload;
      recordResults && recordResults.map((item)=>{
        item.channel_image=item.recording_image
        item.channel_url=item.output_url
      })
      return {
        ...state, 
        recordVideos: recordResults,
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
      case GET_CATEGORIES_HOME:
      let categoryResultshome = payload;
      categoryResultshome &&
      categoryResultshome.map((item, key) => {
          if (key != 1) item.status = false;
          else item.status = true;
        });
      return {
        ...state,
        categorieshome: payload,
        selectedCategoryIdhome: payload[1].id,
      };
    case CHANGE_LIVETV_NAVIGATION_STATUS:
      let newCategories = state.categories.map(item => {
        console.log("ABC" )
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
        categorieshome: newCategories,
        categories: newCategories,
        selectedCategoryId: payload,
        selectedCategoryIdhome: payload,
      };
      case GET_HOME_SETTINGS:
        return{
          ...state,
          homeSettings:payload
        }
        case CHANGE_FAVOURITE_CHANNELS:
          return{
            ...state,
            favouriteChannels:[...payload]
          }
          case GET_PACKAGES:
           console.log("payload",state.channels.filter((item)=>payload[0].channel.includes(item.id)))
            return{
              ...state,
              userPackage:payload[0],
              channels:state.channels.filter((item)=>payload[0].channel.includes(item.id))
            }
            case GET_USER_PROFILE_SETTINGS:
              return{
                ...state,
                userProfile:payload.profile
              }
    default:
      return state;
  }
};
