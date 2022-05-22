import React from 'react'
import './Work.css'

function Work() {
  return (
    <section className='work-section sections' id='work'>
        <h2>Work</h2>
        <h3>Check out some of my projects &#128679;</h3>
        <ul className='work-list'>
            <li className='work-item' id='crypto'>
                <h4>Crypto</h4>
                <p>
                    Track your favorite cryptocurrencies. 
                    <span>
                         With Crypto you can get up-to-date market prices for any
                        cryptocurrency. Crypto also allows you to see other 
                        information such as market cap, total volume, total supply, 
                        and more.
                    </span>
                </p>
                <ul className='work-item-technologies'>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JS</li>
                    <li>API</li>
                </ul>
                <ul className='work-item-links'>
                    <li><a href='#'>GitHub</a></li>
                    <li><a href='#'>Demo</a></li>
                </ul>
            </li>
            <li className='work-item' id='todo'>
                <h4>2Do</h4>
                <p>
                    Manage your every day tasks.
                    <span>
                        By creating a 2Do account, you will be able to 
                        add tasks to your list of things to do, all tasks are
                        are automatically saved, that way you can come back later
                        and cross them off your list.
                    </span>
                </p>
                <ul className='work-item-technologies'>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JS</li>
                    <li>PHP</li>
                    <li>SQL</li>
                </ul>
                <ul className='work-item-links'>
                    <li><a href='#'>GitHub</a></li>
                    <li><a href='#'>Demo</a></li>
                </ul>
            </li>
        </ul>
    </section>
  )
}

export default Work