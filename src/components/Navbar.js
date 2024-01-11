import React from 'react';
import { Link } from 'react-router-dom';


export default function Navbar() {
  return (
    
    <div className='top-top'>
        <nav className='top'>
            <ul className='nav' >
                <li style={{textDecoration: 'none'}} className='fasteats'>
                    
                
                <Link to='/' style={{textDecoration: 'none', }}>FastEats</Link> 
                </li>
                <li  >
                <Link to='/' style={{textDecoration: 'none', fontSize: '1.5rem'}}>HOME</Link> 
                </li>
                
            </ul>
            <div className='login'>
                <button className='log-in'>LOGIN</button>
                <button className='sign-up'>SIGN UP</button>
            </div>
            
        </nav>
        
    </div>
    
  )
}

