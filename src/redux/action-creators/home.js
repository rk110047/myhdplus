import axios from "axios";
import {
  GET_CHANNELS,
  GET_RECOMMENDED_VIDEOS,
  GET_ARCHIVED_VIDEOS,
  GET_CATEGORIES
} from "../action-types/home";

// the action creator to get the channels.
export const getChannels = token => async dispatch => {
  const url = "http://iptv-server-dev.us-west-2.elasticbeanstalk.com/api/v1/channels/";

  try {
    const getChannels = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    });
    return dispatch({ type: GET_CHANNELS, payload: getChannels });
  } catch (error) {
    console.log("erraaaaaaaa", error);
  }
};

// the action creator to Login the user
export const getVideos = token => async dispatch => {
  const url = "http://iptv-server-dev.us-west-2.elasticbeanstalk.com/api/v1/archives/";

  try {
    const getVideos = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    });
    let recVideos = [];
    let arcVideo = [];
    getVideos.data.results.map(video => {
      if (video.video_type === "VD") {
        recVideos.push(video);
      }
      arcVideo.push(video);
    });
    dispatch({ type: GET_RECOMMENDED_VIDEOS, payload: recVideos });
    dispatch({ type: GET_ARCHIVED_VIDEOS, payload: arcVideo });
  } catch (error) {
    console.log("eraaa", error.response);
  }
};

export const getCategories = token => async dispatch => {
  const url = "http://iptv-server-dev.us-west-2.elasticbeanstalk.com/api/v1/categories/";

  try {
    const getCategories = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    });
    dispatch({ type: GET_CATEGORIES, payload: getCategories });
  } catch (error) {
    console.log("error", error);
  }
};
