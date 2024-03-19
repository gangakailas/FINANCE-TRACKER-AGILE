import React from 'react'


export const Income = () => {
  return (
    <div className='in'>
        <div className='bar'>
            <form action="">
                <div className="Header">
                    <h1>MoneyMinder</h1>
                    <ul className='Header-Menu'>
                        <li>DASHBOARD</li>
                        <li>INCOME</li>
                        <li>EXPENSE</li>
                        <li>TRANSACTIONS</li>
                    </ul>
                </div>
                
            </form>

        </div>


        <div className='Income-Box'>
            <form action="">
                <h1>Total Income</h1>
                <h2>$0000</h2>
                <div className="input-box">
                    <input type="text" placeholder='Title' required/>
                </div>
                <div className="input-box">
                    <input type="text" placeholder='Income' required/>
                </div>
                <div className="input-box">
                    <input type="text" placeholder='Purpose' required/>
                </div>
                <div className="input-box">
                    <input type="text" placeholder='Add Remarks' required/>
                </div>
                <button type="submit">Add Income+</button>


            </form>  
        </div>    
    </div>
  )
}
