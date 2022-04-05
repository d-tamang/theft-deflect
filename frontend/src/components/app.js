import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch, Redirect } from 'react-router-dom';
import Modal from './session/modal';
import NavBarContainer from './nav/navbar_container';
import MapWrapper from './map/map_wrapper';
import PinFormContainer from './pin/pin_form_container';

const App = () => (
  <div>
    <Modal />
    <NavBarContainer />
    <Switch>
      <ProtectedRoute exact path="/pins" component={PinFormContainer} />
      <Route exact path="/" component={MapWrapper} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;