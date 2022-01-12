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
import { NavLink } from 'react-router-dom';

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
              <p>
                A place to share investing knowledge and better understand the
                markets
              </p>
            </div>
          </div>
          <div className="Links">
            <a href="https://github.com/w-duffy/squora" target="_blank">
              <img
                src={"https://cdn-icons-png.flaticon.com/512/25/25231.png"}
                alt="github"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/will-duffy-a46a7a8a/"
              target="_blank"
            >
              <img
                src={
                  "https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_black-512.png"
                }
                alt="LinkedIn"
              />
            </a>
            <a
              href="https://www.appacademy.io/enterprise/hiring?utm_medium=ppc&utm_source=google&utm_campaign=14640069351&gclid=Cj0KCQiA8vSOBhCkARIsAGdp6RTVy85MXjwkVGN3f0-ripxBOp9676sXnVJ-uqyIB-7mNQSywGsWiLcaAijhEALw_wcB"
              target="_blank"
            >
              <img className="aa"
                src={
                  "https://assets-global.website-files.com/5dcc7f8c449e597ed83356b8/5dcf6294afa6ed60b2324b60_logo-full-white-1000.png"
                }
                alt="App Academy"
              />
            </a>
            <a href="https://memehub-medium-clone.herokuapp.com/" target="_blank">
              <img className="memehub"
                src={"https://i.ibb.co/RBXZMcT/Screenshot-2022-01-11-142127.png"}
                alt="MemeHub"
              />
            </a>
          </div>
          <div className="Buttons">
            <Navigation isLoaded={isLoaded} />
            {isLoaded && (
              <Switch>
                <Route path="/signup">
                  {/* <SignupFormPage /> */}
                </Route>
              </Switch>
            )}
          </div>
          <div className="Description">
            <SignupFormPage />

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
