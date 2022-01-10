import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Feed from "./components/Feed";
import LoggedInRoute from "./components/Auth/LoggedInRoute";
import Welcome from './components/Welcome'
import {useHistory} from 'react-router-dom'
import { useSelector } from "react-redux";


function App() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  const sessionUser = useSelector(state => state.session.user)

  if(!sessionUser) {
  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/" exact={true}>
            <Welcome />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
        </Switch>
      )}
    </>
  )} else return (
    <>
    <Navigation isLoaded={isLoaded} />
    <LoggedInRoute path={"/"}>
    <Feed />
    </LoggedInRoute>
    </>
  )

}

export default App;
