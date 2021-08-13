import React, { useState } from 'react';
import Navigation from '../Pages/Nav/Navigation'
import { Link, useLocation } from "react-router-dom";
import { withAuthenticator } from 'aws-amplify-react';

import './FreshenUp.scss'
const FreshenUp = ({data}) => {

    const location = useLocation()
    const [listData, setListData] = useState(data ? data : location.state.data);

    const getNewData = (data) => {
        setListData(data)   
    }

    let type = ''

    let listedItems = []
    listData.map((item) => {  
        if(item.itemID) {
            type = 'Chapters:'
            listedItems.push(
                <div className='title'>
                    <Link
                    to={{
                        pathname: `/freshenUp/${item.title}`,
                        state: {
                            data: item,
                            back: {
                                pathname: `/freshenup`,
                            }
                        },
                    }}><h3>{item.title}</h3> </Link>
                </div>
            )
        } else {
            type = 'Sections:'
            listedItems.push(
              <div className='title' onClick={() => getNewData(item.items)}>
                    <h3>{item.title}</h3>
              </div>
            )
        }
    })

    

    return (
        <div className='page'>
            <Navigation />
            <div class='freshenup-content'>
                <h2 className='header'>{type}</h2>
                <div className='wrapper'>
                    {listedItems}
                </div>
            </div>
        </div>)
}



    

export default withAuthenticator(FreshenUp);