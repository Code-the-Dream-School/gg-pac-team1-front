import React, { useEffect, useState } from 'react';
import '../styles/components/_configuser.scss';

const Header = () => {
    const [isSmall, setIsSmall] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsSmall(true);
            } else {
                setIsSmall(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty array ensures this effect only runs on mount and unmount

    return (
        <>
            <header className={isSmall ? 'small' : ''}>
                <div className="header-left">
                    <a href="/" className="brand-link">
                        <h1>TravelAmigos</h1>
                    </a>
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

