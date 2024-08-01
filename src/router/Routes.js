import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutMe from '../pages/aboutMePage/aboutMe';
import BlogPage from '../pages/blog/blog';
import ContactPage from '../pages/contact/contact';
import ProjectPage from '../pages/projectPage/project';
import LandingPage from '../pages/landingPage';

const Routes = () => {
    return (
      <Router>
        <Switch>
          <Route path="/" exact>
            <LandingPage/>
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
          <Route path="/blog" exact>
            <BlogPage/>
          </Route>
        </Switch>
      </Router>
    );
  };
  
  export default Routes;
  