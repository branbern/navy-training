import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";

import './Navigation.scss'


const Navigation = () => {

    const [active, setActive] = useState(window.location.pathname);


  return (
    <div className='global-nav'>
        <a className="brand" href="/">Home</a>

        <ul className="navbar-nav">
            <li className={active === '/quizes' ? 'active' : 'link'} ><Link to="/quizes" onClick={() => setActive('/quizes')}>Quizes</Link></li>
            <li className={active === '/freshenUp' ? 'active' : 'link'} ><Link to="/freshenUp" onClick={() => setActive('/freshenUp')}>Freshen Up</Link></li>
        </ul>
    </div>
  )}

export default Navigation;