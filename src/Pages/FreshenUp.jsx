import React, { useState } from 'react';
import Navigation from '../Pages/Nav/Navigation'
import { Link, useLocation } from "react-router-dom";
import { withAuthenticator } from 'aws-amplify-react';

import './FreshenUp.scss'
const FreshenUp = ({data}) => {

    const location = useLocation()
    const listData = data ? data : location.state.data

    let listedItems = []
    listData.items.map((item) => {  
        listedItems.push(
          <div className='title'>
                <Link
                to={{
                    pathname: `/freshenUp/${item.title}`,
                    state: {
                        data: item,
                    },
                }}><h1>{item.title}</h1> </Link>
          </div>
        )
    })

    return (
        <div className='page'>
            <Navigation />
            <div class='freshenup-content'>
                {listedItems}
            </div>
        </div>)
}



    

export default withAuthenticator(FreshenUp);