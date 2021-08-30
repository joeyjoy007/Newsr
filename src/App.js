
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import LoadingBar from 'react-top-loading-bar'
import News from './News' ;

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";


export default class App extends Component { 
  
state ={
  progress:0
}

setProgress =(progress)=>{
  this.setState({progress :progress})
}

size = 5;
  render() {
    return (
      <div>
      <Router>
      <Navbar/>  
      <LoadingBar
        color='red'
        height={3}
        progress={this.state.progress}
       
      />
      <Switch>


      <Route exact path="/"> <News setProgress={this.setProgress} key="general" size={this.size} country="in" category="general"/>  </Route>
      <Route exact path="/business"> <News setProgress={this.setProgress} key="business" size={this.size} country="in" category="business"/>  </Route>
      <Route exact path="/general "> <News setProgress={this.setProgress} key="general" size={this.size} country="in" category="general"/>  </Route>
      <Route exact path="/health "> <News setProgress={this.setProgress} key="health" size={this.size} country="in" category="health"/>  </Route>
      <Route exact path="/science "> <News setProgress={this.setProgress} key="science" size={this.size} country="in" category="science"/>  </Route>
      <Route exact path="/sports"> <News setProgress={this.setProgress} key="sports" size={this.size} country="in" category="sports"/>  </Route>
      <Route exact path="/technology"> <News setProgress={this.setProgress} key="technology" size={this.size} country="in" category="technology"/>  </Route>
    
    
    </Switch>
     
      
       </Router>
      </div>
    )
  }
}
