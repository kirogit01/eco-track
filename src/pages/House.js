import React from 'react'
import './House.css'
import { Card, Button, CardBody } from 'react-bootstrap';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Education.css'
import './Emissiontip.css'
import {  FaPhone } from "react-icons/fa";







const data = [
  { year: '2015', emissions: 500 },
  { year: '2016', emissions: 600 },
  { year: '2017', emissions: 700 },
  { year: '2018', emissions: 400 },
  { year: '2019', emissions: 900 },
  { year: '2020', emissions: 800 },
  { year: '2021', emissions: 1000 },
  { year: '2022', emissions: 1200 },
];

  const tips = [
    {
      id: 1,
      title: 'Switch to Renewable Energy',
      description: 'Consider switching to solar, wind, or other renewable energy sources to power factory operations and reduce carbon emissions.',
    },
    {
      id: 2,
      title: 'Upgrade to Energy-Efficient Equipment',
      description: 'Invest in energy-efficient machinery, lighting, and HVAC systems to lower energy consumption and emissions.',
    },
    {
      id: 3,
      title: 'Improve Waste Management Practices',
      description: 'Reduce, reuse, and recycle industrial waste. Implementing waste minimization programs can significantly lower emissions associated with waste disposal.',
    },
    {
      id: 4,
      title: 'Adopt Green Transportation Solutions',
      description: 'Transition your factory’s transportation fleet to electric or hybrid vehicles to reduce emissions from logistics and deliveries.',
    },
    {
      id: 5,
      title: 'Implement Carbon Capture Technologies',
      description: 'Install carbon capture and storage (CCS) technologies to capture CO2 emissions before they are released into the atmosphere.',
    },
    {
      id: 6,
      title: 'Conduct Regular Energy Audits',
      description: 'Perform regular energy audits to identify inefficiencies and opportunities for improvement in energy use within the factory.',
    },
  ];



function House() {
  return (
  <div>
   <nav className="navbar navbar-expand-lg fixed-top">
     <div className="container-fluid">
      <a className="navbar-brand me-auto" href="#">Emiscope</a>
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
      <a href="/LoginPage" className="login-button" >login</a>
      <a href="/register" className="login-button" id='lobut'>Registor</a>
      <button className="navbar-toggler pe-8" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    </div>
   </nav>
   <br/>
   <br/>
    <br/>
    <br/>

   <div className='welcome'>
    <h1>Welcome to Emi-Scope</h1>
    <p>Your partner in tracking and reducing factory emissions.</p>
    <a href="/register" className="btn btn-primary">Registor your factories</a>
   </div>
   
    
  <div className="container mt-6">
      <div className="row">
        <div className="col-md-6">
          <h2>Emission Data Overview</h2>
          <p>Track and analyze  factory's emissions data over the years.</p>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="emissions" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>  
      <br/>
      <br/>
      <div>
        <div className="row pt-3">
          <div className="col-md-7">
            <img  src="/pic1.jpg" alt="big" style={{ width: "600px", height: "400px" }}/>
          </div>
          <div className="col-md-5 " >
             <div className="p-4">
              <h1 className="display-6 text-info">Emission of co<sub>2</sub> gas in factories</h1>
              <p>The manufacturing sector released 765 million metric tons (MMT) of CO2e in 2021, in CBO's estimation. Combustion emissions accounted for 573 MMT (or 75 percent), and industrial process emissions accounted for 192 MMT (or 25 percent).
                 Combustion emissions in the United States are more than 99 percent CO2.</p>
              <button className="btn btn-primary"  type="button" >More Details</button>
             </div>
          </div>
        </div>
      </div>
      
      <br/>
      <br/>
      <br/>
      <div >
        <div className="ca1">
          <Card className="service-card">
            <h2 className="service-title">Our Services</h2>
            <p>We provide comprehensive solutions for tracking and reducing emissions in factories.</p>
            <ul className="service-list">
              <li>Emission Tracking</li>
              <li>Data Analysis</li>
              <li>Consultation Services</li>
              <li>Emission Reduction Strategies</li>
              <li>Compliance Assistance</li>
            </ul>
          </Card>
        </div>
        <div className="row">
        <div className="col-md-6">
          <h2>Contact Us</h2>
          <p>If you have any questions or would like to learn more about our services, please reach out to us.</p>
          <form className="contact-form">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Your Name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Your Email" required />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="3" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
      </div>
    </div>  
 </div>
  )
  
}

export default House