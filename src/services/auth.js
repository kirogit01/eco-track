import { getuserData } from "./storage"



export const isAuthenticated = ()=>{
    return  getuserData()!=null?true:false;
}