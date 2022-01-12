import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

function ProfileButton({ user }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push("/");
  };

  return (
    <>
      {/* <button onClick={openMenu}> */}
      <img onClick={openMenu} className="profile-picture-drop" src={`${user.profilePicture}`} />
      {/* </button> */}
      {showMenu && (
        <div className="dropdown-container">
          <div className="dropdown-top">
            <img className="profile-picture" src={`${user.profilePicture}`} />
            {user.username}
          </div>
          <div className="dropdown-bottom">
            <button className="sign-out-button" onClick={logout}>
              Log Out
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ProfileButton;
