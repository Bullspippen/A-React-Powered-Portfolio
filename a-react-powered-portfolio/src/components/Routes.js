import React from 'react';
// Import the Switch and Route components from react-router-dom to create routes for the application pages
import { Switch, Route } from 'react-router-dom';
// Import the Home, About, and Contact components
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

// Create a Routes component that renders the Switch and Route components
const Routes = () => (
  <Switch>
    {/* Create a route for the Home page */}
    <Route exact path="/" component={Home} />
    {/* Create a route for the About page */}
    <Route path="/about" component={About} />
    {/* Create a route for the Contact page */}
    <Route path="/contact" component={Contact} />
  </Switch>
);

export default Routes;
