import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Homepage from '../pages/homepage/homepage';
import Landing from '../pages/landingPage/landingPage'


const Routes = () => {
    return (
      <Router>
        <Switch>
          <Route path="/" exact>
            <Landing/>
          </Route>
          {/* <Route path="/homepage" exact>
            <Homepage/>
          </Route> */}
         
        </Switch>
      </Router>
    );
  };
  
  export default Routes;
  