import React from 'react'
import './Hero.css'
import Avatar from '../../assets/programming-profile.svg'
import LinkedIn from '../../assets/linkedin-icon-light.svg'
import Twitter from '../../assets/twitter-icon-light.svg'
import GitHub from '../../assets/github-icon-light.svg'

const Hero = () => {

    setInterval(function() {
        const show = document.querySelector('span[data-show]');
        const next = show.nextElementSibling || document.querySelector('.title-animation span:first-child');
        const typeIn = document.querySelector('span[data-typing]');

        if (typeIn) {
            typeIn.removeAttribute('data-typing')
        }

        show.removeAttribute('data-show')
        show.setAttribute('data-typing', '')

        next.setAttribute('data-show', '')
    }, 5000)

    return (
        <section className='hero-container' id='hero'>
            <div className='hero-intro'>
                <h5>Hey there &#128075;,</h5>
                <h1>I am <span>&#123; Ish &#125;</span></h1>
                <div className='title-animation'>
                    <span data-show> Web Developer</span>
                    <span> Web Designer</span>
                    <span> Team Player</span>
                
                </div>
                <div className='scroll-animation'>
                    <div className='scroll-animation-container'>
                        <div className='scroll-animation-dot'></div>
                    </div>
                </div>
            </div>
            <div className='profile-container'>
                <div className='profile-image-container'>
                    <img className='profile-image' src={Avatar} alt='Profile Avatar' />
                </div>
                <div className='profile-info'>
                    <h1 className='profile-name'>Want to work together?</h1>
                </div>
                <div className='profile-contact'>
                    <button className='profile-contact-btn'>
                        <a href='https://www.linkedin.com/' target='_blank' rel='noopener noreferrer'>Get in touch</a>
                    </button>
                    <button className='profile-contact-btn'>
                        <a href='https://www.linkedin.com/' target='_blank' rel='noopener noreferrer'>Hire me</a>
                    </button>
                    <h5 className='profile-connect'>Let's connect:</h5>
                    <ul className='profile-social-links'>
                        <li><a href="#"><img src={LinkedIn} alt="Connect on LinkedIn"/></a></li>
                        <li><a href="#"><img src={Twitter} alt="Follow me on Twitter"/></a></li>
                        <li><a href="#"><img src={GitHub} alt="Contribute together on GitHub"/></a></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Hero
