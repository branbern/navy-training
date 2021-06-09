import React, { useState } from 'react';
import Alert from './Components/Alert'
import './FlashCard.scss';

const FlashCard = ({data, onClick}) => {

    function createAlerts() {
        let alerts = []
        if (data.blue) {
            data.blue.map((alert, i) => {
                alerts.push(<Alert data={alert} key={i}/>)
            })
        }
        return alerts
    }

    function createTopics() {
        let topics = []
        if (data.red) {
            data.red.notes.map((question, i) => {
                topics.push(<li key={i}>{question}</li>)
            })
        }
        return topics
    }

    function createImages() {
        let images = []
        if (data.images) {
            data.images.map((image, i) => {
                images.push(<img src={require("../../" + image)} key={i} /> )
            })
        }
        return images
    }

    return (
        <div className='flash-card'>
            <div onClick={onClick} className='flash-card-content'>
                <h2>{data.yellow}</h2> 
                <p>{data.green}</p>
            </div>
            <div>
                <div className='topics'>
                    {createTopics()}
                </div>
                <div className="images">
                    {createImages()}
                </div>
            </div>
            <ul className='alert-wrapper'>
                {createAlerts()}
            </ul>
        </div>
    )
}


export default FlashCard;
