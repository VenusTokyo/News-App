import React from 'react';

import './App.css';
import Navbar from './components/Navbar';
import { Component } from 'react'
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <div>
        <Navbar/>
        
        <Switch>
          <Route exact path="/"><News pageSize={9} key="general" country="in" category="general"/></Route>
          <Route exact path="/business"><News pageSize={9} key="business" country="in" category="business"/></Route>
          <Route exact path="/entertainment"><News pageSize={9} key="entertainment" country="in" category="entertainment"/></Route>
          <Route exact path="/general"><News pageSize={9} key="general" country="in" category="general"/></Route>
          <Route exact path="/health"><News pageSize={9} key="health" country="in" category="health"/></Route>
          <Route exact path="/science"><News pageSize={9} key="science" country="in" category="science"/></Route>
          <Route exact path="/sports"><News pageSize={9} key="sports" country="in" category="sports"/></Route>
          <Route exact path="/technology"><News pageSize={9} key="technology" country="in" category="technology"/></Route>
          
        </Switch>
        </div>
          
        </Router>
      </div>
    )
  }
}
