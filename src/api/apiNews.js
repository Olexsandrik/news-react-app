import axios from "axios";

const BASE_URL = "https://api.currentsapi.services/v1/";

const API_KEY = "wdONqWHTA7ZF8EnSIS3IJXPY0WHqLVcsqI0_9AFGMrhXdIHi";


export const getNews = async()=>{
    try{
        const response = await axios.get(`${BASE_URL}latest-news`,  {
            params:{
                apiKey: API_KEY
            }
        })
        return response.data

    }catch(error){
        console.warn(error);
    }
}