import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { deleteAnswer, getAnswers } from "../../store/answers";
import { useHistory } from "react-router-dom";
import { getQuestions } from "../../store/questions";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

function AnswersDeleteFormModal({ answer }) {
  const [showModal, setShowModal] = useState(false);
  const sessionUser = useSelector((state) => state.session.user);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleDelete = async (e) => {
    e.preventDefault();
    let deleted = await dispatch(deleteAnswer(answer));
    await dispatch(getAnswers());
    toast("Your answer has been deleted", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2500,
    });
    if (deleted) {
      setShowModal(false);
    }
  };

  if (sessionUser.id == answer.ownerId) {
    return (
      <>
        <button className="modal-buttons-ed" onClick={() => setShowModal(true)}>
          Delete
        </button>

        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <div>
              <h1>Delete Question?</h1>
              <form onSubmit={handleDelete}>
                <div className="modal-button">
                  <button className="nav-button" type="submit">
                    Confirm
                  </button>
                  <button
                    className="nav-button"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </Modal>
        )}
      </>
    );
  } else return <></>;
}

export default AnswersDeleteFormModal;
