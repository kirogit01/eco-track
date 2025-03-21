import React from 'react'
import { Link, Navigate } from 'react-router-dom';
import './LoginPage.css'

function LoginPage() {
  return (
     <section className="login-block">
          <div className="container">
                 <div className="row ">
                            <div className="col login-sec">
                                 <h2 className="text-center">Login Now</h2>
                                 <form className="login-form" action="">
                                 <div className="form-group">
                                     <label htmlFor="exampleInputEmail1" className="text-uppercase">Email</label>
                                     <input type="email"  className="form-control"  name="email"  id="" placeholder="email"  />
                                     
                                     <span className="text-danger" >
                                                 Email is required.
                                             </span>
                                             
                                   </div>
                                   <div className="form-group">
                                             <label htmlFor="exampleInputPassword1" className="text-uppercase">Password</label>
                                             <input  className="form-control" type="password"  name="password" placeholder="password" id="" />
                                             
                                             <span className="text-danger" >
                                                 Password is required.
                                             </span>
                                             
                                   </div>
                                   <div className="form-group">
                                             
                                             <div  className="text-center">
                                                 <div className="spinner-border text-primary " role="status">
                                                     <span className="sr-only"></span>
                                                 </div>
                                             </div>
                                             <span className="text-danger" >
                                             
                                             
                                             
                                             
                                             </span>
                                             <input  type="submit" className="btn btn-login float-right"   value="Login" />
                                   </div>
                                         <div className="clearfix"></div>
                                         <div className="form-group">
                                         Create new account ? Please <Link  to="/register">Register</Link>
                                         </div>
                                         </form>
                                     </div>
                                 </div>
                             </div>
     </section>
  )
}

export default LoginPage