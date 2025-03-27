import { getuserData, removeUserData } from "./storage"



export const isAuthenticated = ()=>{
    return  getuserData()!=null?true:false;
}


export const logout = ()=>{

    removeUserData();
}