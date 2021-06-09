import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Desk from './Comps/Desk/Desk'
import FreshenUp from './Pages/FreshenUp'
import Quizes from './Pages/Quizes'
import Section from './Comps/Desk/Section'
import './App.scss'


const App = () => {



  return (
    <Router>
      <Switch>
        <Route path="/" exact render={() => (<Desk />)}/>
        <Route path="/quizes" exact render={() => (<Quizes />)}/>
        <Route path="/freshenup" exact render={() => (<FreshenUp />)}/>
        <Route path="/:section">
          <Section />
        </Route>
      </Switch>
    </Router>
  )}

export default App;