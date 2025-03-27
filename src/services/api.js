import axios from "axios"
import { getuserData } from "./storage";

axios.defaults.baseURL = "https://identitytoolkit.googleapis.com/v1";
const API_KEY = "AIzaSyD9WmaDc8dI_KTzbeWw0v7RvGnab6BqRCk";
const REGISTER_URL = `/accounts:signUp?key=${API_KEY}`;
const LOGIN_URL = `/accounts:signInWithPassword?key=${API_KEY}`;
const USER_DETAILS_URL = `/accounts:lookup?key=${API_KEY}`;


export const RegisterApi = (inputs)=>{  
    let data  = {displayName:inputs.name,email:inputs.email,password:inputs.password }
    return axios.post(REGISTER_URL,data)  
}

export const LoginApi = (inputs)=>{
    let data  = {email:inputs.email,password:inputs.password }
    return axios.post(LOGIN_URL,data)
}
export const UserDetailsApi = ()=>{
    let data ={idToken:getuserData()};
    
    return axios.post(USER_DETAILS_URL,data)
}