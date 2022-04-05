import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import MapContainer from './map/map_container';
import { Wrapper } from "@googlemaps/react-wrapper";

const App = () => (
  <div>
    {/* <NavBarContainer /> */}
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </Switch>

    <Wrapper apiKey={"AIzaSyDhm27MhVA89tLn0zM3WdLTl06Yt3FZZWI&libraries=visualization"}>
      <MapContainer />
    </Wrapper>
  </div>
);

export default App;