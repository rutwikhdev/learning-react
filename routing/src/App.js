import React from 'react';
import { 
  Route, 
  Switch, 
  Link 
} from 'react-router-dom';

import Home from './pages/HomePage';
import Contact from './pages/ContactPage';
import About from './pages/AboutPage';
import Details from './pages/Details'

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/details">
          <Details />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
