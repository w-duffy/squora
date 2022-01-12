import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import {Route} from 'react-router-dom'
import Feed from '../Feed'
import Login from '../Login'

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />

    );
  } else {
    sessionLinks = (
      <>
        <Login />
      </>
    );
  }

  return (
    <div>
        {/* <NavLink exact to="/">Home</NavLink> */}
        {isLoaded && sessionLinks}
    </div>
  );
}

export default Navigation;
