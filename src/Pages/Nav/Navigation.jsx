import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import {Auth} from 'aws-amplify';

import './Navigation.scss'


const Navigation = () => {

    const [active, setActive] = useState(window.location.pathname);

    async function signOut() {
      try {
          await Auth.signOut();
      } catch (error) {
          console.log('error signing out: ', error);
      }
  }


  return (
    <div className='global-nav'>
        <a className="brand" href="/">Home</a>

        <ul className="navbar-nav">
            <li className={active === '/quizes' ? 'active' : 'link'} ><Link to="/quizes" onClick={() => setActive('/quizes')}>Quizes</Link></li>
            <li className={active === '/freshenUp' ? 'active' : 'link'} ><Link to="/freshenUp" onClick={() => setActive('/freshenUp')}>Freshen Up</Link></li>
            <li className={active === '/freshenUp' ? 'active' : 'link'} ><a onClick={() => signOut()}>Sign Out</a></li>
        </ul>
    </div>
  )}

export default Navigation;