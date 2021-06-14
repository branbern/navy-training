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


    function filterData() {
        let dataList = []

        let thing = data.green.replace(/\n/g, '').split(/(?<=(\.\s))/g)
        let result = thing.filter(function(x) {
            return x !== '. ';
        });
       
        result.map((e) => {
            dataList.push(<p>{e}</p>)
        })

        return  dataList
    }

    
  
    return (
        <div className='flash-card'>
  
            <div className='flash-card-content-wrapper'>
                <div className='flash-card-content'>
                    <i className="fas fa-chevron-right next" onClick={onClick}></i>
                    <h2>{data.yellow}</h2> 
                    {filterData()}
                </div>
                <div className='topics-wrapper'>
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
        </div>
    )
}


export default FlashCard;
