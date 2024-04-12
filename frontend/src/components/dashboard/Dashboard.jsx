import { Link, useLocation } from 'react-router-dom';
import './Dashboard.css';
import { IoNotificationsOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";

export const Dashboard = () => {
 const location = useLocation();

 return (
    <div className='in-dash'>
      <div className='dash-bar'>
        <div className='dash-Header'>
          <h1>MoneyMinder</h1>
          
          <ul className='dHeader-Menu'>
            <li className={location.pathname === '/dashboard' ? 'dash-item active' : 'dash-item'}>
              <Link to="/dashboard" className="dmenu-button">DASHBOARD</Link>
            </li>
            <li className={location.pathname === '/income' ? 'dash-item active' : 'dash-item'}>
              <Link to="/income" className="imenu-button">INCOME</Link>
            </li>
            <li className={location.pathname === '/expense' ? 'dash-item active' : 'dash-item'}>
              <Link to="/expense" className="emenu-button">EXPENSE</Link>
            </li>
            <li className={location.pathname === '/transaction' ? 'dash-item active' : 'dash-item'}>
              <Link to="/transaction" className="tmenu-button">TRANSACTIONS</Link>
            </li>
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