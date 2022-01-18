import React, { useState, useEffect } from "react";
import { Modal } from "../../context/Modal";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import "../../context/Modal.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {editAnswer, getAnswers} from '../../store/answers'
toast.configure();

function EditAnswerModal({ answer }) {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const [id, setId] = useState(answer.id);
  const [editedAnswerContent, setEditedAnswerContent] = useState(answer.answer);
  const sessionUser = useSelector((state) => state.session.user);
  const [errors, setErrors] = useState([]);

  const handleEdit = async (e) => {
    e.preventDefault();
    const content = editedAnswerContent;

    if (content.length > 255) {
        return setErrors(["Your answer must be less than 255 characters."]);
      }

    if (content === "") {
      return setErrors(["You cannot submit a blank answer."]);
    }

    const editedAnswer = {
      id: answer.id,
      content,
    };
    toast("Your answer has been edited", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2500,
    });

    let editReturn = await dispatch(editAnswer(editedAnswer));

    if (editReturn) {
      setShowModal(false);
    }
  };

  useEffect(async () => {
    setShowModal(false);
  }, [answer]);

  if (sessionUser.id == answer.ownerId) {
    return (
      <>
        <button className="modal-buttons-ed" onClick={() => setShowModal(true)}>
          Edit
        </button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <div className="edit-modal">
              <h1 className="edit-h1">Edit Answer</h1>
              <form>
                <ul>
                  {errors.map((error) => (
                    <li className="error-li" key={error}>{error}</li>
                  ))}
                </ul>
                <textarea
                  // id="description_textarea"
                  className="text-box"
                  value={editedAnswerContent}
                  onChange={(e) => setEditedAnswerContent(e.target.value)}
                ></textarea>
                <div className="modal-button">
                  <button
                    className="nav-button"
                    onClick={(e) => handleEdit(e, answer.id)}
                  >
                    Save
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

export default EditAnswerModal;
