import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Auth, API, graphqlOperation} from 'aws-amplify';
// import * as queries from './graphql/queries'

import Home from './Pages/Home'
import FreshenUp from './Pages/FreshenUp'
import Quizes from './Pages/Quizes'
import Desk from './Pages/Desk'
import data from './Data/Data'
import Quiz from './Comps/Quiz/Quiz'
import awsconfig from './aws-exports';
  
import './App.scss'
import '@aws-amplify/ui/dist/style.css';

import FreshenUpId from './Pages/FreshenUpId';
import SignIn from './Pages/Nav/SignIn/SignIn';

Auth.configure(awsconfig)

const App = () => {

  return (
    <Router>
      <Switch>
        <Route path="/" exact render={() => (<Home />)}/>
        <Route path="/quizes" exact render={() => (<Quizes data={data}/>)}/>
        <Route path="/freshenup" exact render={() => (<FreshenUp data={data.chapters}/>)}/>
        <Route path="/freshenup/:id" render={() => (<FreshenUpId />)}/>
        <Route path="/signIn" component={SignIn}/>
        <Route path="/quiz/:id" component={Quiz}/>
        <Route path="/:section">
          <Desk />
        </Route>
      </Switch>
    </Router>
  )}
 
  export default App