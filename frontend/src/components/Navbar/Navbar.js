import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Navbar.css";
import ProfileButton from "../Navigation/ProfileButton";

const Navbar = () => {
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <div className="nav-container">


      <div>
        <h1>Squora</h1>
      </div>
      <div>
          <NavLink to="/">
          Home
          </NavLink>
      </div>


      <div>
        <ProfileButton user={sessionUser} />
      </div>
      <div>
        Search Squora
      </div>
      <div>
          <button>Add question</button>
      </div>

    </div>
  );
};

export default Navbar;
