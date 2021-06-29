import React, { useState }from 'react';
import { Link, useLocation } from "react-router-dom";
import FlashCard from '../Comps/FlashCard/FlashCard'
import './Desk.scss';

const Desk = () => {


    const location = useLocation()
    const { data } = location.state

    console.log('item', location.state)

    let texts = []
    data.text.text.map((e) => {
        texts.push(<p>{e}</p>)
    })

    return (
        <div className='page desk'>

            <div className='back-nav'>
                <Link
                to={{
                    pathname: location.state.back.pathname,
                    state: {
                        data: location.state.back.data,
                    }}}>
                    <i class="fas fa-chevron-left back-chev"></i>
                </Link>
            </div>

            <h2>{data.title}</h2>
            {texts}
        </div>
    )
}


export default Desk;
