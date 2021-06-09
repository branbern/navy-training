import React, { useState } from 'react';
import data from '../Data/data.json'
import Navigation from '../Pages/Nav/Navigation'
import { Link, useLocation } from "react-router-dom";

import './FreshenUp.scss'
const FreshenUp = () => {

    const [active, setActive] = useState([]);

    

    const optionDisplay = () => {
        const clicked = (key, i) => {
            let arry = [...active]
            if (active.includes(key)) {
                arry.splice(active.indexOf(key), 1)
            } else {
                arry.push(key)
            }
            setActive(arry)
        }

        const createTitles = () => {
            let sections = []

            let sortedArry = data.sections.sort(function(a, b) {
                return a.sectionNumber - b.sectionNumber;
            });
            data.sections.map((section, i) => {
                let titleOptions = []
                
                section.infos.map((info) => {
                    titleOptions.push(
                        <p>
                            <Link
                            to={{
                                pathname: "/section",
                                state: {
                                data: info,
                                },
                            }}>
                            - {info.title}
                            </Link>
                        </p>
                    )

                })
                sections.push(
                    <div className='title' key={section.sectionNumber}>
                        <p onClick={() => clicked(section.sectionNumber, i)}>{section.sectionNumber}: {section.neatTitle}</p>
                        <div className={active.includes(section.sectionNumber) ? "title-options active" : "hidden"}>
                            {titleOptions}
                        </div>
                    </div>)
            })
            return sections
        }
        return (
            <div>
                {createTitles()}
            </div>)
    }

    return (
        <div className='page'>
            <Navigation />
            <div className="content title-container">
                <h4>Sections: </h4>
                {optionDisplay()}
            </div>
        </div>)
}



    

export default FreshenUp;