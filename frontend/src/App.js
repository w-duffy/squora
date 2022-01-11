import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Feed from "./components/Feed";
import LoggedInRoute from "./components/Auth/LoggedInRoute";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Follows from "./components/Follows";
import Topics from "./components/Topics";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  const sessionUser = useSelector((state) => state.session.user);

  if (!sessionUser) {
    return (
      <>
        <div className="Welcome-container">
          <div className="Title">
            <h1>Squora</h1>
            <div>
            <p>A place to share investing knowledge and better understand the market</p>
            </div>
          </div>
          <div className="Links">
            test
          </div>
          <div className="Buttons">
            <Navigation isLoaded={isLoaded} />
            {isLoaded && (
              <Switch>
                <Route path="/signup">
                  <SignupFormPage />
                </Route>
              </Switch>
            )}
          </div>
          <div className="Description">
            test
          </div>
        </div>
      </>
    );
  } else
    return (
      <>
        <div className="container">
          <div className="Header">
            <Navbar />
          </div>
          <div className="Feed">
            <LoggedInRoute path={"/"}>
              <Feed />
            </LoggedInRoute>
          </div>
          <div className="Topics">
            <LoggedInRoute path={"/"}>
              <Topics />
            </LoggedInRoute>
          </div>
          <div className="Follows">
            <LoggedInRoute path={"/"}>
              <Follows />
            </LoggedInRoute>
          </div>
        </div>
      </>
    );
}

export default App;
