
import React, { useState } from 'react'

import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const App =()=>{
  const apiKey=process.env.REACT_APP_NEWS_API;
  
  const [progress,setProgress]=useState(10)
  
  
    return (
      <div>
        <Router>
        <div>
        <Navbar/>
        <LoadingBar
        height={4}
        color='#f11946'
        progress={progress}
        
      />
        <Switch>
          <Route exact path="/"><News setProgress={setProgress} apiKey={apiKey} pageSize={9} key="general" country="in" category="general"/></Route>
          <Route exact path="/business"><News setProgress={setProgress} apiKey={apiKey} pageSize={9} key="business" country="in" category="business"/></Route>
          <Route exact path="/entertainment"><News setProgress={setProgress} apiKey={apiKey} pageSize={9} key="entertainment" country="in" category="entertainment"/></Route>
          <Route exact path="/general"><News setProgress={setProgress} apiKey={apiKey} pageSize={9} key="general" country="in" category="general"/></Route>
          <Route exact path="/health"><News setProgress={setProgress} apiKey={apiKey} pageSize={9} key="health" country="in" category="health"/></Route>
          <Route exact path="/science"><News setProgress={setProgress} apiKey={apiKey} pageSize={9} key="science" country="in" category="science"/></Route>
          <Route exact path="/sports"><News setProgress={setProgress} apiKey={apiKey} pageSize={9} key="sports" country="in" category="sports"/></Route>
          <Route exact path="/technology"><News setProgress={setProgress} apiKey={apiKey} pageSize={9} key="technology" country="in" category="technology"/></Route>
          
        </Switch>
        </div>
          
        </Router>
      </div>
    )
  
}
export default App