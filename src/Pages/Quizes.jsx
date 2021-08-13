import React from 'react';
import { withAuthenticator } from 'aws-amplify-react';

import Navigation from '../Pages/Nav/Navigation'

const Quizes = ({data}) => {
  console.log(data)



  return (
    <div className='page'>
        <Navigation />
    </div>
  )}

export default withAuthenticator(Quizes);