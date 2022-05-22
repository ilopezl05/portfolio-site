import React, { useState } from 'react'
import './NavBar.css'

const NavBar = () => {

    const [isOpen, setIsOpen] = useState(true);

    const handleToggle = () => {
        setIsOpen(!isOpen)
    }

    window.addEventListener('resize', () => {
        setIsOpen(true)
    });

    window.addEventListener('scroll', () => {
        setIsOpen(true)
    });

    return (
        <header id='home'>
            <div className='navigation'>
                <div className='navbar-brand'>iLL</div>
                <div className='toggle-menu' onClick={handleToggle}>
                    <div className='toggle-menu-bar bar-1'></div>
                    <div className='toggle-menu-bar bar-2'></div>
                    <div className='toggle-menu-bar bar-3'></div>
                </div>
                <nav className={isOpen ? 'navbar-menu' : 'navbar-menu-active'}>
                    <ul>
                        <li><a href='#hero' >Home</a></li>
                        <li><a href='#about' >About</a></li>
                        <li><a href='#work' >Work</a></li>
                        <li><a href='#contact' >Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default NavBar