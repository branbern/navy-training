import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";

const FreshenUpId = () => {

    const location = useLocation()
    const sectionData = location.state.data

    let listedSections = []
    sectionData.sections.map((section) => {  
        listedSections.push(
          <div className='title'>
                <Link
                to={{
                    pathname: `/section/`,
                    state: {
                        data: section,
                        back: {
                            pathname: `/freshenup/${sectionData.title}`,
                            data: sectionData,
                        }
                    },
                }}><h1>{section.title}</h1> </Link>
          </div>
        )
    })

    return (
        <div className='page'>
             <div className='back-nav'>
                <Link
                to={{
                    pathname: '/freshenUp',
                    state: {
                        data: sectionData,
                    }}}>
                    <i class="fas fa-chevron-left back-chev"></i>
                </Link>
            </div>
            <div class='freshenup-content'>
                {listedSections}
            </div>
        </div>)
}




    

export default FreshenUpId;