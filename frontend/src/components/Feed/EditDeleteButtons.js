import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import QuestionModal from "../Questions/QuestionModal";
import DeleteFormModal from "./DeleteFormModal";
import EditFormModal from "./EditFormModal";

function EditDeleteButtons({ question }) {
  const [showMenu, setShowMenu] = useState(false);
  const sessionUser = useSelector((state) => state.session.user);

  const openMenu = () => {
    if (!showMenu) {
      setShowMenu(true);
      return;
    }
    if (showMenu) {
      setShowMenu(false);
      return;
    }
  };
  useEffect(() => {
    setShowMenu(false);
  }, [question]);

  return (
    <>
      {!showMenu && question.ownerId === sessionUser.id && (
        <div>
          <img
            onClick={openMenu}
            className="ed-picture-drop"
            src={"https://i.ibb.co/qWKjzzb/Screenshot-2022-01-11-224913.png"}
          />
        </div>

        // <button onClick={openMenu} className="profile-picture-drop">OPEN</button>
      )}
      {showMenu && (
        <div>
          <EditFormModal question={question} />
          <DeleteFormModal question={question} />
          <button onClick={openMenu} className="close-buttons">X</button>
        </div>
      )}
    </>
  );
}

export default EditDeleteButtons;
