import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import DankMemes from './components/Dankmemes';
import Features from './components/Features';
import Pricing from './components/Pricing';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      
    <Router>
      <Navbar />
        

      <Switch>
        <Route path="/features" component={Features}>
          <Features />
        </Route>
        <Route path="/pricing" component={Pricing}>
          <Pricing />
        </Route>
        <Route path="/dankMemes" component={DankMemes}>
          <DankMemes />
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
