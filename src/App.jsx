import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './Pages/Home'
import FreshenUp from './Pages/FreshenUp'
import Quizes from './Pages/Quizes'
import Desk from './Pages/Desk'
import data from './Data/Data'
import Quiz from './Comps/Quiz/Quiz'
  
import './App.scss'
import FreshenUpId from './Pages/FreshenUpId';


const App = () => {



  return (
    <Router>
      <Switch>
        <Route path="/" exact render={() => (<Home />)}/>
        <Route path="/quizes" exact render={() => (<Quizes data={data}/>)}/>
        <Route path="/freshenup" exact render={() => (<FreshenUp data={data.chapters}/>)}/>
        <Route path="/freshenup/:id" render={() => (<FreshenUpId />)}/>
        <Route path="/quiz/:id" render={() => (<Quiz />)}/>
        <Route path="/:section">
          <Desk />
        </Route>
      </Switch>
    </Router>
  )}

export default App;