//import React from 'react'
import './Signup.css';

export const Signup = () => {
  return (
    <div className='signup-container'>
        <div className='Signup-Box'>
            <form action="">
                <h1>MoneyMinder</h1>
                <h2>SIGN UP</h2>
                <div className="input-box">
                    <input type="text" placeholder='Email-ID' required/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Create Password' required/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Confirm Password' required/>
                </div>


                <button type="submit">SIGN UP</button>
                <div className='register-link'>
                    <p>Already have an account?<a href="#">SignIn</a></p>

                </div>

            </form>  
        </div>    
    </div>
  )
}