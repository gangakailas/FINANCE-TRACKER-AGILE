// import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'



export const Home = () => {
  return (
    <div className="home-container"> 
      <div className="icon">
        <h1 className="logo">MoneyMinder</h1>
      </div>

      <div className="menu">
        <button className="cn"><Link to="/signup">SIGN UP</Link></button>
        <button className="cn"><Link to="/signin">SIGN IN</Link></button>
      </div>
      
      <div className="content">
        <h1>Finance Made Easier Than<br/>Ever Before</h1>
      </div>
    </div>
  );
};