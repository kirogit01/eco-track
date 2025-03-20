import React from 'react'
import './Home.css'

    

function home() {
  return (

    <nav className="navbar navbar-expand-lg fixed-top">
    <div className="container-fluid">
     <a className="navbar-brand me-auto" href="#">Eco-Track</a>
      <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Eco-Track</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
            <li className="nav-item">
              <a className="nav-link mx-lg-2 active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-lg-2" href="#">services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-lg-2" href="#">contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-lg-2" href="#">about</a>
            </li>
            </ul>
        </div>
      </div>
      <a href="/register" className="login-button">login</a>
      <button className="navbar-toggler pe-8" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    </div>
  </nav>
    

  )
}

export default home
