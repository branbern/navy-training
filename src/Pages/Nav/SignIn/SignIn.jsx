import React from 'react';
import { withAuthenticator } from 'aws-amplify-react';
import Home from '../../Home'

const SignIn = () => {
    console.log('waht')
    return (
        <Home />
    )
}

export default withAuthenticator(SignIn);