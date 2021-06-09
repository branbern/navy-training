import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";

import './Title.scss';

const Title = ({data}) => {
    return (
        <div className='title'>
            <Link
                to={{
                    pathname: "/section",
                    state: {
                    data: data,
                    },
                }}
                >
                <h1>{data.title}</h1>
            </Link>
        </div>
    )
}


export default Title;
