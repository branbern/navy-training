import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Desk from './Comps/Desk/Desk'
import Section from './Comps/Desk/Section'


const App = () => {



  return (
    <Router>
      <Switch>
        <Route path="/" exact render={() => (<Desk />)}/>
        <Route path="/:section">
          <Section />
        </Route>
      </Switch>
    </Router>
  )}

export default App;