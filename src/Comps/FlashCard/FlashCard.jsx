import React, { useState } from 'react';
import Alert from './Components/Alert'
import './FlashCard.scss';

const FlashCard = ({data, onClick}) => {
    
    return (
        <div className='flash-card'>
  
            <div className='flash-card-content-wrapper'>
                <div className='flash-card-content'>
                    <i className="fas fa-chevron-right next" onClick={onClick}></i>
                    <h2></h2> 
                </div>
                <div className='topics-wrapper'>
                    <div className='topics'>
                    </div>
                    <div className="images">
                    </div>
                </div>
            </div>
        </div>
    )
}


export default FlashCard;
