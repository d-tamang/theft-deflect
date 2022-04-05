import React from 'react';
import { AuthRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import MapContainer from './map/map_container';
import PinFormContainer from './pin/pin_form_container';

const App = () => (
  <div>
    {/* <NavBarContainer /> */}
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/new_pin" component={PinFormContainer} />
    </Switch>
    <MapContainer />
  </div>
);

export default App;