import React from 'react';

import './App.css';
import Navbar from './components/Navbar';
import { Component } from 'react'
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default class App extends Component {
  apiKey=process.env.REACT_APP_NEWS_API;
  state={
    progress:10
  }
  setProgress=(progress)=>{
    this.setState({progress: progress})
  }
  render() {
    return (
      <div>
        <Router>
        <div>
        <Navbar/>
        <LoadingBar
        height={4}
        color='#f11946'
        progress={this.state.progress}
        
      />
        <Switch>
          <Route exact path="/"><News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={9} key="general" country="in" category="general"/></Route>
          <Route exact path="/business"><News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={9} key="business" country="in" category="business"/></Route>
          <Route exact path="/entertainment"><News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={9} key="entertainment" country="in" category="entertainment"/></Route>
          <Route exact path="/general"><News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={9} key="general" country="in" category="general"/></Route>
          <Route exact path="/health"><News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={9} key="health" country="in" category="health"/></Route>
          <Route exact path="/science"><News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={9} key="science" country="in" category="science"/></Route>
          <Route exact path="/sports"><News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={9} key="sports" country="in" category="sports"/></Route>
          <Route exact path="/technology"><News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={9} key="technology" country="in" category="technology"/></Route>
          
        </Switch>
        </div>
          
        </Router>
      </div>
    )
  }
}
