import React, { useState } from 'react';
import Navigation from './Nav/Navigation'
import './Home.scss';

const Home = () => {

    return ( 
        <div className='home' >
            <Navigation />

            <div className='forged-section' style={{backgroundImage: 'url(images/navy1.jpg)'}}>
                <div className='section' >
                    <div className='welcome'>
                        <h2>FORGED BY THE SEA</h2>
                        <p>"The sea is a force to be reckoned with. People have been made by it, and broken by it. But in the Navy, we command it. The sea is our honor, courage and commitment, forging the greatest force on earth."</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Home;
