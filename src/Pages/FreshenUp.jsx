import React, { useState } from 'react';
import Navigation from '../Pages/Nav/Navigation'
import List from '../Pages/Components/List'
import { Link, useLocation } from "react-router-dom";

import './FreshenUp.scss'
const FreshenUp = ({data}) => {
    const location = useLocation()
    const listData = data ? data : location.state.data
    const showBack = data ? false : true
    
    return (
        <div className='page'>
            <Navigation />
            <div class='freshenup-content'>
                {showBack ?
                    <Link to={{
                            pathname: "/freshenUp",}}>
                            <i class="fas fa-chevron-left back-chev"></i>
                    </Link>
                : null}
                <List data={listData}/>
            </div>
        </div>)
}



    

export default FreshenUp;