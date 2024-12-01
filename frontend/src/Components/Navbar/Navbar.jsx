import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import {NavLink } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Assets/nav_dropdown.png'

const Navbar = () => {

    const [menu, setMenu] = useState("shop");
    const {getTotalCartItems}= useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }
 
  return (
    <div className = 'navbar'>
        <div className="nav-logo">
            <img src={logo} alt = "" />
            <p>SHOPPER</p>
        </div>
        <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
        <ul ref={menuRef} className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><NavLink style={{textDecoration: 'none'}} to = '/'>Shop</NavLink>{menu === "shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}><NavLink style={{textDecoration: 'none'}} to = '/mens'>Men</NavLink>{menu === "mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}><NavLink style={{textDecoration: 'none'}} to = '/womens'>Women</NavLink>{menu === "womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><NavLink style={{textDecoration: 'none'}} to = '/kids'>Kids</NavLink>{menu === "kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <NavLink to = '/login'><button>Login</button></NavLink>
            <NavLink to = '/cart'><img src={cart_icon} alt = "" /></NavLink>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar