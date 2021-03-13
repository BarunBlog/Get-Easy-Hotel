import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';

import {Button} from './Button';

import './Navbar.css';


function Navbar(){
    const [click, setClick] = useState(false);

    const [button, setButton] = useState(true);


    const handleClick = () => setClick(!click);
    
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 900) {
            setButton(false);
        }else{
            setButton(true);
        }
    }

    /* Whenever component mounts or state changes useEffect runs */
    useEffect(() => {
        showButton();
    }, []);

    /* whenever resize the screen get showbutton */
    window.addEventListener('resize', showButton);

    return (
        <>

            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        <i className='fas fa-hotel'/>Get-Easy-Hotel
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        {/* if click on the menu icon */}
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/hotels' className='nav-links' onClick={closeMobileMenu}>
                                Hotels
                            </Link>
                        </li>

                        
                        <li className='nav-item'>
                            <Link to='/about-us' className='nav-links' onClick={closeMobileMenu}>
                                About Us
                            </Link>
                        </li>
                        { window.innerWidth <= 900 &&
                            <li className='nav-item'>
                                <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                                    Sign Up
                                </Link>
                            </li>
                        }
                        
                    </ul>
                    { button && <Button to='sign-up' buttonStyle='btn--outline'>SIGN UP</Button> }
                </div>
            </nav>

        </>
    )
}

export default Navbar;