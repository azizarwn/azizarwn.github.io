import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutMe from '../pages/aboutMePage/aboutMe';
import ContactPage from '../pages/contact/contact';
import Landing from '../pages/landingPage/landingPage'
import ProjectPage from '../pages/projectPage/project';

const Routes = () => {
    return (
      <Router>
        <Switch>
          <Route path="/" exact>
            <Landing/>
          </Route>
          <Route path="/about-me" exact>
            <AboutMe/>
          </Route>
          <Route path="/project" exact>
            <ProjectPage/>
          </Route>
          <Route path="/contact" exact>
            <ContactPage/>
          </Route>
        </Switch>
      </Router>
    );
  };
  
  export default Routes;
  