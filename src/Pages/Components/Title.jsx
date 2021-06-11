import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";

import './Title.scss';

const Title = ({data}) => {
    console.log(data)
    return (
        <div className='title'>
            {data.items ? 
            <Link
            to={{
                pathname: `/freshenup/:${data.title}`,
                state: {
                id: data.title,
                data: data,
                back: './freshenup'
                },
            }}><h1>{data.title}</h1> </Link>
            : <Link
                to={{
                    pathname: "/section",
                    state: {
                    data: data,
                    },
                }}><h1>{data.title}</h1> </Link>}
        </div>
    )
}


export default Title;
