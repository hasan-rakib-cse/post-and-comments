import React from 'react'
import { NavLink } from 'react-router-dom'

import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <NavLink to='/' className='navlink'>Home</NavLink>
      <NavLink to='/posts' className='navlink'>Posts</NavLink>
    </nav>
  )
}

export default Navbar