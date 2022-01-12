import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Navbar.css";
import ProfileButton from "../Navigation/ProfileButton";
import QuestionModal from "../Questions/QuestionModal";

const Navbar = () => {
  const sessionUser = useSelector((state) => state.session.user);


  // let user = users.filter(a =>{
  //   return a.id === sessionUser.id
  // })
  // console.log(user)

  return (
    <div className="nav-container">
      <div>
        <NavLink to="/" className="nav-title">Squora</NavLink>
      </div>
      <div>
        <p>Welcome {sessionUser.username}</p>
      </div>

      <div>Search Squora</div>
      <div>
        <button className="nav-button">Add question</button>
      </div>
      <div>
        <ProfileButton user={sessionUser} />
      </div>
    </div>
  );
};

export default Navbar;
