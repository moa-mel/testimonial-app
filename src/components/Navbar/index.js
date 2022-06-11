import React from 'react'
import "./styles.css"

const Navbar = () => {
  return (
      <div className='header'>
    <div className='container'>
    <div className='container-menu'>
    <ul className='nav-menu'>
    <li >
    <a href='/'>MARKET PLACE</a>
    </li>
    <li>
    <a href='/'>WHOLESALE CENTER</a>
    </li>
    <li>
    <a href='/'>SELLER CENTER</a>
    </li>
    <li>
    <a href='/'>SERVICES</a>
    </li>
    <li>
    <a href='/'>INTERNSHIPS</a>
    </li>
    <li>
    <a href='/'>EVENTS</a>
    </li>
    </ul>
    </div>
    </div>
    </div>
  )
}

export default Navbar