import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-block'>
        <ul>
          <li>
            <Link to='/home'>Home</Link>
          </li>
          <li>
            <Link to='/news'>News</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
        </ul>
      </div>
      <div className='footer-block'>
        <p>Phone: +001002003</p>
        <address>New Yort Steet</address>
        <p>info@news.com</p>
      </div>

      <p>Made by Amalia Tadevosyan</p>
    </footer>
  );
};

export default Footer;
