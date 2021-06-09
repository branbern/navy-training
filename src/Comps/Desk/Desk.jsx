import React, { useState } from 'react';
import Title from './Components/Title'
import data from '../../Data/data.json'
import './desk.scss';

const Desk = () => {
    const createTitles = () => {
        let sections = []
        data.sections.map((section, i) => {
            sections.push(<Title data={section} key={i} />)
        })
        return sections
    }
   

    return (
        <div className='desk'>
            <h1>Welcome!</h1>
            <div className="title-container">
                {createTitles()}
            </div>
        </div>
    )
}


export default Desk;
