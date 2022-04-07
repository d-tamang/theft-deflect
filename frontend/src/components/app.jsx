import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch, Redirect } from 'react-router-dom';
import Modal from './session/modal';
import NavBarContainer from './nav/navbar_container';
import MapWrapper from './map/map_wrapper';
import AccountContainer from './nav/account_container';
import PinShowContainer from './pin/pin_show_container';
import AboutPage from './nav/about_page';
import './app.css';
import './reset.css';

const App = () => (
  <div className="app">
    <Modal />
    <NavBarContainer />
    <Switch>
      <ProtectedRoute exact path="/account" component={AccountContainer} />
      <Route exact path="/about" render={AboutPage}/>
      <Route exact path="/pins/:pinId" component={PinShowContainer} />
      <Route exact path="/" component={MapWrapper} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;