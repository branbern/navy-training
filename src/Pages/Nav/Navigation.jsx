import React, { useState, useCallback } from 'react';
import { Link, useLocation, useHistory } from "react-router-dom";
import {Auth} from 'aws-amplify';

import './Navigation.scss'


const Navigation = () => {

    const [active, setActive] = useState(window.location.pathname);
    const [loggedIn, setLoggedIn] = useState(false);
    const history = useHistory();
    const handleSignOut = useCallback(() => history.push('/'), [history]);

    async function signOut() {
        try {
            await Auth.signOut({ global: true });
            handleSignOut();
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }

    async function CanEnter()
    {   
        try {
            await Auth.currentAuthenticatedUser()     
            setLoggedIn(true)
            console.log('logged in')
        }   
        catch(e) {
            setLoggedIn(false)
        } 
    }

    CanEnter();

    return (
        <div className='global-nav'>
            <div className='nav-wrap'>
                <a className="brand" href="/">Home</a>

                <ul className="navbar-nav">
                    <li className={active === '/quizes' ? 'active' : 'link', loggedIn ? 'show' : 'hide'} ><Link to="/quizes" onClick={() => setActive('/quizes')}>Quizes</Link></li>
                    <li className={active === '/freshenUp' ? 'active' : 'link', loggedIn ? 'show' : 'hide'} ><Link to="/freshenUp" onClick={() => setActive('/freshenUp')}>Freshen Up</Link></li>
                    <li className={loggedIn ? 'hide' : 'show'} ><Link to="/signIn">Sign In</Link></li>
                    <li className={loggedIn ? 'hide' : 'show'} ><Link to="/signIn">Sign Up</Link></li>
                    <li className={loggedIn ? 'show sign-out' : 'hide'} ><a onClick={() => signOut()}>Sign Out</a></li>
                </ul>
            </div>
        </div>
    )}

export default Navigation;