import React, { useState } from 'react';
import Navigation from './Nav/Navigation'
import './Home.scss';

const Home = () => {

    return (
        <div className='page'>
            <Navigation />

            <div className='intro'>
                <h2>Home</h2>
                <p></p>
            </div>
        </div>
    )
}


export default Home;
