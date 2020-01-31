import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";

export default class QueryUtil {
    static getHeader=async ()=>{
       const header= {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ` +await AsyncStorage.getItem('api_token')
    }
       return header
    }
    static base_url ="http://185.94.77.112:8000/api/v1"
    
     static getWithoutToken=(path)=>{
        return axios.get(QueryUtil.base_url + path)
    }

     static postWithoutToken=(path, payload)=> {
        return axios.post(QueryUtil.base_url + path, payload);
    }

     static get=async (path)=> {
        let headers=await QueryUtil.getHeader();
        return axios.get(QueryUtil.base_url + path,{headers:headers})
    }

     static post=async(path, payload)=> {
        let headers=await QueryUtil.getHeader();
        return axios.post(QueryUtil.base_url + path, payload,{headers:headers});
    }

     static put=async(path, payload)=>{
        let headers=await QueryUtil.getHeader();
        return axios.put(QueryUtil.base_url + path, payload,{headers:headers});
    }

      static patch=async(path, payload)=> {
        let headers=await QueryUtil.getHeader();
        return axios.patch(QueryUtil.base_url + path, payload),{headers:headers};
    }

   
}