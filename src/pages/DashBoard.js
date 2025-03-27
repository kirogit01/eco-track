import React, { useEffect, useState } from 'react'
import { UserDetailsApi } from '../services/api';
import NavBar from '../components/NavBar';
import { logout,isAuthenticated} from '../services/auth';
import { useNavigate} from 'react-router-dom';
import { Navigate } from 'react-router-dom';









function DashBoard() {

    

    const Navigate = useNavigate();
    const [user,setUser] =  useState({
        name:"",
        email:"",
        localId:""
    });

    useEffect(()=>{
        if(isAuthenticated())
        {
          //call the api to get the user details
           UserDetailsApi().then((response)=>{
            console.log(response);
             setUser({
                name:response.data.users[0].displayName,
                email:response.data.users[0].email,
                localId:response.data.users[0].localId
            })
            
        })
        }
    },[])

    const logoutUser = ()=>{

        logout();
        Navigate("/LoginPage");
    }
    if(!isAuthenticated())
        {
          return <Navigate to="/LoginPage" />
        }
    
    


  return (
    

 
    <div>
            <NavBar logoutUser={logoutUser}/>
            <main role="main" className="container mt-5">
                <div className="container">
                    <div className="text-center mt-5">
                        <h3>Dashboard page</h3>
                       
                            <div>
                                <p className="text-bold " > </p>
                                
                                {user.name && user.email && user.localId ?
                                <div>
                                    <h5>Name : {user.name}</h5>
                                    <p>Email : {user.email}</p>
                                    
                                
                                </div>
                                : <p>Loading...</p>
                            }
                                
                            </div>
                            
                    </div>
                </div>
            </main>
        </div>

  )
}

export default DashBoard