import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";

const LoggedInRoute = props => {
  const sessionUser = useSelector(state => state.session.user)

  return (
    <Route {...props}>
      {(sessionUser) ? props.children  : <Redirect to="/welcome" />}
    </Route>
  )
};


export default LoggedInRoute;
