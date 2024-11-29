import React, { useState, useEffect } from 'react';
import "./Header.css";
import Logo from './../../assets/Listee Travel.svg';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768 && isMenuOpen) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isMenuOpen]);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }
    }, [isMenuOpen]);

    return (
        <header className='header'>
            <div className='container'>
                <nav className='navbar'>
                    <img className='navbar__logo' src={Logo} alt='logo' />
                    <button
                        className={`mobile-menu-toggle ${isMenuOpen ? 'open' : ''}`}
                        onClick={toggleMenu}
                        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <ul className={`navbar__menu ${isMenuOpen ? 'open' : ''}`}>
                        <li className='navbar__menu__item'><a href="#home">Home</a></li>
                        <li className='navbar__menu__item'><a href="#about">About Us</a></li>
                        <li className='navbar__menu__item'><a href="#destinations">Destinations</a></li>
                        <li className='navbar__menu__item'><a href="#tours">Tours</a></li>
                        <li className='navbar__menu__item'><a href="#shop">Shop</a></li>
                        <li className='navbar__menu__item'><a href="#blogs">Blogs</a></li>
                    </ul>
                    <div className={`navbar__right ${isMenuOpen ? 'open' : ''}`}>
                        <div className='toggle__menu'>
                            <li className='navbar__menu__item'><a href="#home">Home</a></li>
                            <li className='navbar__menu__item'><a href="#about">About Us</a></li>
                            <li className='navbar__menu__item'><a href="#destinations">Destinations</a></li>
                            <li className='navbar__menu__item'><a href="#tours">Tours</a></li>
                            <li className='navbar__menu__item'><a href="#shop">Shop</a></li>
                            <li className='navbar__menu__item'><a href="#blogs">Blogs</a></li>
                        </div>
                        <button className='navbar__right__signin'>Sign In</button>
                        <button className='navbar__right__signup'>Sign Up</button>
                    </div>
                </nav>
                <main className='main'>
                    <p className='main__subtitle'>Explorer and Travel</p>
                    <h1 className='main__title'>Let's Go Now</h1>
                    <p className='main__text'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    </p>
                    <div className='main__content'></div>
                </main>
            </div>
            <div className='bg'></div>
        </header>
    );
}

