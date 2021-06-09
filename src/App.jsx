import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './Pages/Home'
import FreshenUp from './Pages/FreshenUp'
import Quizes from './Pages/Quizes'
import Desk from './Pages/Desk'
import './App.scss'


const App = () => {



  return (
    <Router>
      <Switch>
        <Route path="/" exact render={() => (<Home />)}/>
        <Route path="/quizes" exact render={() => (<Quizes />)}/>
        <Route path="/freshenup" exact render={() => (<FreshenUp />)}/>
        <Route path="/:section">
          <Desk />
        </Route>
      </Switch>
    </Router>
  )}

export default App;