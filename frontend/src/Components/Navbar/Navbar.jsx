import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'

export const Navbar = () => {
    // const []
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt=''/>
            <p>SHOPIFYN</p>

        </div>
        <ul className='nav-menu'>
            <li>Shop<hr></hr></li>
            <li>Women</li>
            <li>Men</li>
            <li>Kids</li>
        </ul>
        <div className='nav-login-cart'>
            <button>Login</button>
            <img src={cart_icon} alt=''/>
            <div className='nav-cart-count'>0</div>

        </div>

    </div>
  )
}
