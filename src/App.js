
import './App.css';

import React from 'react'
import Navbar from './components/Navbar';
import LoadingBar from 'react-top-loading-bar'
import News from './News' ;

import { BrowserRouter as Router,Switch, Route,} from "react-router-dom";
import { useState } from 'react';

const App =()=> { 
  
// const state =()=>{
//   progress:0
// }

const [progress, setProgress] = useState(0)

// setProgress =(progress)=>{
//   setState({progress :progress})
// }

const size = 5;
 
    return (
      <div>
      <Router>
      <Navbar/>  
      <LoadingBar
        color='red'
        height={3}
        progress={progress}
       
      />
      <Switch>


      <Route exact path="/"> <News setProgress={setProgress} key="general" size={size} country="in" category="general"/>  </Route>
      <Route exact path="/business"> <News setProgress={setProgress} key="business" size={size} country="in" category="business"/>  </Route>
      <Route exact path="/general "> <News setProgress={setProgress} key="general" size={size} country="in" category="general"/>  </Route>
      <Route exact path="/health "> <News setProgress={setProgress} key="health" size={size} country="in" category="health"/>  </Route>
      <Route exact path="/science "> <News setProgress={setProgress} key="science" size={size} country="in" category="science"/>  </Route>
      <Route exact path="/sports"> <News setProgress={setProgress} key="sports" size={size} country="in" category="sports"/>  </Route>
      <Route exact path="/technology"> <News setProgress={setProgress} key="technology" size={size} country="in" category="technology"/>  </Route>
    
      
    
    </Switch>
     
      
       </Router>
      </div>
    )
  }

export default App