import React, { useState } from 'react';
import './Alert.scss';

const Alert = ({data}) => {
    const [opened, setOpened] = useState(false);

    return (
        <div className={`alert alert-${data.type} ${opened ? 'show' : 'hide'}` } onClick={() => setOpened(!opened)}> 
            <h3>{data.type}</h3>
            <p>{data.text}</p>
        </div>
    )
}


export default Alert;
