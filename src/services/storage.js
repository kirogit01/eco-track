export const storeUserData = (data)=>{
    localStorage.setItem('idToken',data)
}

export const getuserData =()=>{
      return localStorage.getItem('idToken');
}

export const removeUserData = ()=>{
    localStorage.removeItem('idToken');
}