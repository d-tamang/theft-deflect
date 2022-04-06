import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch, Redirect } from 'react-router-dom';
import Modal from './session/modal';
import NavBarContainer from './nav/navbar_container';
import MapWrapper from './map/map_wrapper';
import PinFormContainer from './pin/pin_form_container';
import AccountContainer from './nav/account_container';
import './app.css';

const App = () => (
  <div className="app">
    <Modal />
    <NavBarContainer />
    <Switch>
      <ProtectedRoute exact path="/account" component={AccountContainer} />
      <Route exact path="/" component={MapWrapper} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;