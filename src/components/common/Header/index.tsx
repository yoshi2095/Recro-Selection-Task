import React from 'react';
import "./index.css";
import logo from "../../../assets/images/logo.svg"

export default function Header() {
    return <header className='header'>
        <div className='header-content'>
        <div className='items-left'>
                <div className='logo'>
                    <img src={logo}/>
                </div>
                <div className='links'>
                    <div className='link'>
                        Movies
                    </div>
                    <div className='link'>
                        TV Show
                    </div>
                    <div className='link'>
                        People
                    </div>
                    <div className='link'>
                        More
                    </div>
                </div>
                
            </div>
            <div className='items-right'>
                <div className='link'>
                    Log In
                </div>
                <div className='link'>
                    Join Us
                </div>
                <div className='link search-icon'>
                    &#128269;
                </div>
            </div>
        </div>
        
        
    </header>
}