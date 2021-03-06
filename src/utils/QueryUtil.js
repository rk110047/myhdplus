import axios from 'axios';
// import AsyncStorage from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
const getHeaders = async () => {
  return await AsyncStorage.getItem('api_token');
};
export const axiosInstance = axios.create({
  baseURL: 'https://gs-iptv-mgmt01.gibsat.com/api/v1',
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
    Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MywiZW1haWwiOiJkdW1teUBnbWFpbC5jb20ifQ.kxCReTSbF_-jKtPGIrNIVicEUVETXMOwGoSL7Y4P2YA`,
  },
});
export default class QueryUtil {
  static getHeader = async () => {
    console.log('token', await AsyncStorage.getItem('api_token'));
    const header = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ` + getHeaders(),
      'Cache-Control': 'no-cache',
      'X-Requested-With': 'Iptv'
    };
    return header;
  };
  // static base_url ="http://196.29.238.117/api/v1"
  static base_url ="http://196.29.238.110/api/v1"
  // static base_url = 'https://gs-iptv-mgmt01.gibsat.com/api/v1';
  static getWithoutToken = path => {
    return axios.get(QueryUtil.base_url + path);
  };

  static postWithoutToken = (path, payload) => {
    return axios.post("http://196.29.238.110/api/v1" + path, payload);
  };

  static get = async path => {
    // const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    return axios({
      method: 'get',
      url:  QueryUtil.base_url + path,
      headers: {
        Authorization: 'Bearer ' + (await AsyncStorage.getItem('api_token')),
        'X-Requested-With': 'Iptv',
      },
    });
  };

  static get1 = async path => {
    //const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    //const proxyUrl = 'https://serene-bastion-88265.herokuapp.com/';
    return axios({
      method: 'get',
      url: QueryUtil.base_url + path,
      credentials: 'include',
      headers: {
        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NiwidXNlcm5hbWUiOiI3MDExMTY2MDQwMDAiLCJ0cyI6MTYyMjIwOTExOH0.1qLjy4pOBD_cseJQW7bJTmsvDZgHB0qVCimLIxYY0U8',
        'Content-Type': 'text/plain',
        "Access-Control-Allow-Origin":"*",
        'X-Requested-With': 'Iptv',
      },
    });
  };

  static post = async (path, payload) => {
    let headers = await QueryUtil.getHeader();
    return axios.post(QueryUtil.base_url + path, payload, {headers: headers});
  };

  static put = async (path, payload) => {
    let headers = await QueryUtil.getHeader();
    return axios.put(QueryUtil.base_url + path, payload, {headers: headers});
  };

  static patch = async (path, payload) => {
    let headers = await QueryUtil.getHeader();
    return axios.patch(QueryUtil.base_url + path, payload), {headers: headers};
  };
}
