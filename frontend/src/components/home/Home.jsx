// import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'



export const Home = () => {
  return (
    <div className="home-container"> 
      <div className="icon">
        <h2 className="logo">MoneyMinder</h2>
      </div>

      <div className="menu">
        <button className="cn"><a href="#">SIGN UP</a></button>
        <button className="cn"><Link to="Signin">SIGN IN</Link></button>
      </div>
      
      <div className="content">
        <h1>Finance Made Easier Than<br/>Ever Before</h1>
      </div>
    </div>
  );
};