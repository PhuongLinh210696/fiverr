import axios from "axios";
import { getData } from "../Utils/localStore";
const BASE_URL = "https://fiverrnew.cybersoft.edu.vn/";
const TokenCybersoft = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAwNyIsIkhldEhhblN0cmluZyI6IjE5LzEyLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTcwMjk0NDAwMDAwMCIsIm5iZiI6MTY3OTg1MDAwMCwiZXhwIjoxNzAzMDkxNjAwfQ.28D2Nfp6Hy4C5u8pvZDIxH2pzlYoKIqgfsJLI_Dque4";


const accessToken = getData("user");
const configHeaderAxios = () => { 
    return {
        TokenCybersoft,
        // Authorization: 'Bearer ' + accessToken?.token 
        Token: accessToken?.token
    };
 };

export const https = axios.create({
    baseURL : BASE_URL,
    headers : configHeaderAxios(),
});