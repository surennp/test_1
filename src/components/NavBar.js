import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
import {Button} from './Button';

function NavBar() {
    //now we use useState, updatable sthings
    const [click, setClick] = useState(false);
    const [button, setButton]= useState(true);

    //now we create a function that handles the clicks user makes
    //the initial statement is the bars and after each click it changes
    // the like Counter thing could be done the same way 
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () =>setClick(false);

    const showButton=()=>{
        if(window.innerWidth<=960){
            setButton(false);
        }
        else{
            setButton(true);
        }
    };

    useEffect(()=>{showButton()}, []);
    window.addEventListener('resize',showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        infopatum <i className="fab fa-typo3"></i>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active': 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/quizzes' className='nav-links' onClick={closeMobileMenu}>
                                Quizzes
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/aboutus' className='nav-links' onClick={closeMobileMenu}>
                                About Us
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                    
                </div>
            </nav>

        </>
    )
}

export default NavBar
