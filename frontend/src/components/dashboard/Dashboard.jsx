//import React from 'react'
import './Dashboard.css';
//import { GrNotification } from "react-icons/gr";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { menuItems } from '../../utils/menuItems';
import PropTypes from 'prop-types'; 
import styled from 'styled-components';

export const Dashboard = ({active, setActive}) => {
   

  return (
    <div className='in-dashboard'>
      <div className='bar'>
        <div className='Header'>
          <h1>MoneyMinder</h1>
          <NavStyled>
            <ul className='Header-Menu'>
              {menuItems.map((item)=>{
                  return<li
                    key={item.id}
                    onClick={() => setActive(item.id)}
                    className={active === item.id ? 'active': ''}
                  >
                    <span>{item.title}</span>
                  </li>
              })}
            </ul>
          </NavStyled>
          

          
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

Dashboard.propTypes = {
  active: PropTypes.number.isRequired,
  setActive: PropTypes.func.isRequired,
};

const NavStyled = styled.nav`
  .active{
    color: rgba(34, 34, 96, 1);
    i{
      color: rgba(34, 34, 96, 1);
    }
  }
`;

