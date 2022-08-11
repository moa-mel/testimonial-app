import React from 'react'
import "./styles.css"
import Button from '../Button'
import {Link} from 'react-router-dom'
import Logo from "../../images/Vasiti-Logo-black 1.png"

const Header = () => {
  return (
    <div className="header">
    <div className="container">
    <img className='logo' src={Logo} alt="" />
    <ul className="nav-head">
    <li className="nav-li">
    <a>About Us</a>
    </li>
    <Link to='/testimony'>
    <li>
    <a>Stories</a>
    </li>
    </Link>
    <li>
    <a >Contact</a>
    </li>
    <li>
    <a >LOG IN</a>
    </li>
    <li>
    <Button>
    SIGN UP
    </Button>
    </li>
    </ul>
    </div>
    </div>
  )
}

export default Header