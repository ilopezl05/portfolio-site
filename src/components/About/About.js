import React from 'react'
import './About.css'
import user from '../../assets/user.svg'

function About() {
  return (
    <section className='about-section sections' id='about'>
      <article>
          <h2>About</h2>
          <h3>Who am I? &#128104;&#8205;&#127891;</h3>
          <p>
              My name is Ismael Lopez. 
              I am a web developer based in San Antonio, TX. 
              I graduated college with an Associates of Applied 
              Science degree in Web and Mobile Development.
              My curiosity and passion for learning is what 
              motivates me to overcome challenges.  
              
          </p>
      </article>
      <img src={user} alt="User profile" />
    </section>
  )
}

export default About