//import React from 'react'
import './Income.css';
//import { GrNotification } from "react-icons/gr";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import styled from 'styled-components';

export const Income = () => {
  return (
     <IncomeContainer>
        <div className='in-income'>
          <div className='bar'>
            <div className='Header'>
              <h1>MoneyMinder</h1>
          
              <ul className='Header-Menu'>
              <li><button className="menu-button">DASHBOARD</button></li>
              <li className="income-item"><button className="menu-button">INCOME</button></li>
              <li><button className="menu-button">EXPENSE</button></li>
              <li><button className="menu-button">TRANSACTIONS</button></li>
              </ul>
          
              <div className='register-link notifications'>
                <a href="#"><IoNotificationsOutline className="icon" /></a>
              </div>
              <div className='register-link settings'>
                <a href="#"><IoSettingsOutline className="icon"/></a>
              </div>
              <div className='register-link account'>
                <a href="#"><VscAccount className="icon"/></a>
              </div>
            </div>
          </div>
          

          <div className="Box">
            <div className='l-Box'>
              <div className='tot-inc'>
                <p>Total Income</p>
                <p>₹____</p> 
              </div>
              
              <div className="Title-box">
                    <input type="text" placeholder='Title' required/>
              </div>
              <div className="Income-box">
                    <input type="text" placeholder='Income' required/>
              </div>
              <div className="Purpose-box">
                    <input type="text" placeholder='Purpose' required/>
              </div>
              <div className="Remarks-box">
                    <input type="text" placeholder='Add-Remarks' required/>
              </div>

              <button type="submit">Add Income+</button>

            </div>
            <div className="r-Box">
              <div className="in4">
                <p>Income 4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Amount</p>
              </div>
              <div className="in3">
                <p>Income 3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Amount</p>
              </div>
              <div className="in2">
                <p>Income 3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Amount</p>
              </div>
              <div className="in1">
                <p>Income 1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Amount</p>
              </div>
            </div>
          </div>
         
    </div> 
     </IncomeContainer>
  );
 };




const IncomeContainer = styled.div`
 background: url('../Assets/incomepage.png') no-repeat;
 background-size: cover;
 height: 100vh;
 display: flex;
 justify-content: center;
 align-items: center;
 min-height: 100vh;
 position: relative;
 max-width: 1500px;
 margin: auto;
`;