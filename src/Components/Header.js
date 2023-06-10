import React from 'react'
import { Link } from 'react-router-dom';

function Header(props) {
  
 
  return (
    <div className='Header bg dark'>
        <h1>{props.heading}</h1>
         
        <div className='navbar bg-dark'>
        <Link to ='/'>
          <span>Home</span>
        </Link>  
         <Link to ='/view'>
            <span className='nav-item'>VIEW BOOK</span>
         </Link>
         <Link to ='/add'>
            <span className='nav-item'>ADD BOOK</span>
         </Link>
         <Link to ='/'>
            <span className='nav-item'>Back</span>
         </Link>
        </div>
    </div>
  )
}

export default Header;