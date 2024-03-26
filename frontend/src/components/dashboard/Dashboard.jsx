//import React from 'react'
import './Dashboard.css';
//import { GrNotification } from "react-icons/gr";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";


export const Dashboard = () => {


  return (
    <div className='in-dash'>
      <div className='dash-bar'>
        <div className='dash-Header'>
          <h1>MoneyMinder</h1>
          
          <ul className='dHeader-Menu'>
            <li className="dash-item"><button className="dmenu-button">DASHBOARD</button></li>
            <li ><button className="dmenu-button">INCOME</button></li>
            <li ><button className="dmenu-button">EXPENSE</button></li>
            <li><button className="dmenu-button">TRANSACTIONS</button></li>
          </ul>
          
          <div className='dregister-link notifications'>
            <a href="#"><IoNotificationsOutline className="icon" /></a>
          </div>
          <div className='dregister-link settings'>
            <a href="#"><IoSettingsOutline className="icon"/></a>
          </div>
          <div className='dregister-link account'>
            <a href="#"><VscAccount className="icon"/></a>
          </div>
        </div>
      </div>
       
      <div className='Main-box'>
        <div className='Recent'>
          <div className="Earnings">
            <p>EARNINGS</p>
          </div>
          <div className="Spend">
            <p>SPEND</p>
          </div>
          <div className="Summary">
            <p>SUMMARY</p>
          </div>
        </div>
      </div>

      <div className="Repres">
        <div className="left">
          <div className="Bal">
            <p>Available Balance</p>
          </div>
          <div className="Sum">
            <p>DAYTIME SUMMARY</p> 
          </div>
        </div>
        <div className="right">
          <div className='Graph'>
            <p>Outcome Visualizing Graph</p>
          </div>
              
        </div>
      </div>


    </div>
  )
}