import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <header>
                <div className="header-left">
                    <Link to="/" className="brand-link">
                         <h1>TravelAmigos</h1>
                    </Link> 
                </div>
                <div className="header-right">
                    <nav>
                        <ul>
                            <li><a href="#support">Support</a></li>
                            <li><a href="#notifications"><i className="fas fa-bell"></i></a></li>
                            <li><a href="#signin">Sign In</a></li>
                        </ul>
                    </nav>
                </div>
            </header>    
        </>
    );
};

export default Header;


