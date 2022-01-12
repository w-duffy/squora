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

  const openMenu = () => {
    if (!showMenu){
      setShowMenu(true);
      return;
    }
    if (showMenu){
      setShowMenu(false);
      return;
    }
  };
  useEffect(() => {
    setShowMenu(false)
  }, [question])

  return (
    <>
      <button onClick={openMenu} className="profile-picture-drop">OPEN</button>
      {showMenu && (
        <div>
            <EditFormModal question={question}/>
            <DeleteFormModal question={question} />
        </div>
      )}
    </>
  );
}

export default EditDeleteButtons;
