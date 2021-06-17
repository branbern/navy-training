import React, { useState } from 'react';
import Title from './Title';
import './List.scss'

const List = ({data}) => {
    console.log(data, 'yo')
    const items = data.items ? data.items : data.sections
    const title = data.title

    const makeListFromData = () => {
        let listedItems = []
        items.map((section) => {  
            listedItems.push(<Title data={section}/>)
        })
        return listedItems;
    }

    return (
        <div className="title-container">
            <h4>{title}:</h4>
            {items ? makeListFromData() : null}
        </div>)
}



    

export default List;