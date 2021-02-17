import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav className='nav'>
        <Link to='/' className='logo'>
          LOGO
        </Link>

        <ul className='nav-list'>
          <li className='nav-item'>
            <NavLink to='/' className='nav-link'>
              Home
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/news' className='nav-link'>
              News
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/login' className='nav-link'>
              Login
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/profile' className='nav-link'>
              Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
