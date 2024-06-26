import React from 'react';
import classes from './Navbar.module.css';
import logo from '../assets/0f20536396bff6008067aa207e4f7712.png';


export default function Navbar() {
  return (
    <>
  
    
     <div className={classes.navbar}>
        <div className={classes.container}>
        <img src={logo} className={classes.logo} alt="Logo" />
        <svg className={classes.burger} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_0_307)">
              <path fillRule="evenodd" clipRule="evenodd" d="M3 0C1.34315 0 0 1.34315 0 3V37C0 38.6569 1.34315 40 3 40H37C38.6569 40 40 38.6569 40 37V3C40 1.34315 38.6569 0 37 0H3Z" fill="white"/>
              <path d="M26 23.5C26 23.2266 25.7734 23 25.5 23H14.5C14.2266 23 14 23.2266 14 23.5V24.5C14 24.7734 14.2266 25 14.5 25H25.5C25.7734 25 26 24.7734 26 24.5V23.5ZM26 19.5C26 19.2266 25.7734 19 25.5 19H14.5C14.2266 19 14 19.2266 14 19.5V20.5C14 20.7734 14.2266 21 14.5 21H25.5C25.7734 21 26 20.7734 26 20.5V19.5ZM26 15.5C26 15.2266 25.7734 15 25.5 15H14.5C14.2266 15 14 15.2266 14 15.5V16.5C14 16.7734 14.2266 17 14.5 17H25.5C25.7734 17 26 16.7734 26 16.5V15.5Z" fill="#2B4074"/>
            </g>
            <defs>
              <clipPath id="clip0_0_307">
                <rect width="40" height="40" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </div>
     </div>





    </>
  );
}
