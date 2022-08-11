import React from 'react';
import "./index.css";
import logo_2 from "../../../assets/images/logo_2.png";

export default function Footer() {
    return <div className='footer'>
        <div className='footer-grid'>
            <div className='footer-item'>
                <img className='footer-logo' src={logo_2}/>
                <div className='footer-address'>
                    24, Vaishnavi Centre, Raja Park, 51, Dhanana, Panipat, Haryana, Pincode-154419
                </div>
            </div>
            <div className='footer-item'>
                <div className='footer-item-title'>
                    The Basics
                </div> 
                <div className='footer-item-link'>
                    About weekend watch
                </div>
                <div className='footer-item-link'>
                    Contact Us
                </div>
                <div className='footer-item-link'>
                    Support
                </div>
                <div className='footer-item-link'>
                    API
                </div>
            </div>
            <div className='footer-item'>
                <div className='footer-item-title'>
                    Get Involved
                </div>
                <div className='footer-item-link'>
                    Contribution Guideline
                </div>
                <div className='footer-item-link'>
                    Add New Movie
                </div>
                <div className='footer-item-link'>
                    Add New TV Show
                </div>
            </div>
            <div className='footer-item'>
                <div className='footer-item-title'>
                    Community
                </div>
                <div className='footer-item-link'>
                    Guidelines
                </div>
                <div className='footer-item-link'>
                    Discussions
                </div>
                <div className='footer-item-link'>
                    Leaderboard
                </div>
                <div className='footer-item-link'>
                    Tweeter
                </div>
            </div>
            <div className='footer-item'>
                <div className='footer-item-title'>
                    Legal
                </div>
                <div className='footer-item-link'>
                    Terms of use
                </div>
                <div className='footer-item-link'>
                    API Terms of use 
                </div>
                <div className='footer-item-link'>
                    Privacy Policy
                </div>
            </div>
        </div>
        <div className='footer-copyright'>
            <div className='copyright-content'>
                <div className='copyright-text'>
                    © 2022 STAR. All Rights Reserved. Weekend watch’s all related Movies and TV Shoes are part of copyright.
                </div>
                <div className='footer-dropdown'>
                    Dropdown
                </div>
            </div>
        </div>
    </div>
}