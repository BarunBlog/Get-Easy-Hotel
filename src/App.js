import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Hotels from './components/pages/Hotels';
import Attractions from './components/pages/Attractions'
import About from './components/pages/About'
import SignUp from './components/pages/SignUp'

import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/hotels' exact component={Hotels} />
          <Route path='/attractions' exact component={Attractions} />
          <Route path='/about-us' exact component={About} />
          <Route path='/sign-up' exact component={SignUp} />
        </Switch>
        
        <Footer />
      </Router>
    </>
  );
}

export default App;
