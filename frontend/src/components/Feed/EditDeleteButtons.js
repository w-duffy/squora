import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import QuestionModal from "../Questions/QuestionModal";
import DeleteFormModal from "./DeleteFormModal";
import EditFormModal from "./EditFormModal";
import AnswersModal from "../Answers/AnswersModal";


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
    <div>
      {!showMenu && (
        <div>

          <button onClick={openMenu} className="close-buttons-open">
            . . .
          </button>
        </div>

      )}
      <div>
        {showMenu && <AnswersModal question={question} />}
        {showMenu && question.ownerId === sessionUser.id && (
          <>
            <EditFormModal question={question} />
            <DeleteFormModal question={question} />
          </>
        )}
        {showMenu && (
          <>
            <button onClick={openMenu} className="close-buttons">
              X
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default EditDeleteButtons;
