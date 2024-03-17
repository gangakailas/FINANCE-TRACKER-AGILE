import React from 'react'
import './Signin.css';

export const Signin = () => {
  return (
    <div className='signin-container'>
        <div className='Signup-Box'>
            <form action="">
                <h1>MoneyMinder</h1>
                <h2>SIGN IN</h2>
                <div className="input-box">
                    <input type="text" placeholder='Email-ID' required/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Password' required/>
                </div>

                <div className='remember-forgot'>
                    <label> <input type="checkbox"/>Remember me</label>
                    <a href="#">Forgot password?</a>
                </div>

                <button type="submit">SIGN IN</button>
                <div className='register-link'>
                    <p>Don't have an account?<a href="#">SignUp</a></p>

                </div>

            </form>  
        </div>    
    </div>
  )
}
