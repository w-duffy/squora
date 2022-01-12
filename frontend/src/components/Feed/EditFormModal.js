import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { editQuestion } from "../../store/questions";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import '../../context/Modal.css'

function EditFormModal({ question }) {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const [description, setDescription] = useState(question.description);
  const [id, setId] = useState(question.id);
  const [editedQuestionContent, setEditedQuestionContent] = useState(
    question.description
  );
  const sessionUser = useSelector((state) => state.session.user);
  const [errors, setErrors] = useState([]);

  const handleEdit = async (e) => {
    e.preventDefault();
    const content = editedQuestionContent;
    let idx = content.indexOf("?")
    let length = content.length - 1

    if ( idx !== length){
      return setErrors(["Your question must end with a question mark."]);
    }

    if (content === "") {
      return setErrors(["You cannot submit a blank question."]);
    }

    const editedQuestion = {
      id: question.id,
      content,
    };

    let editReturn = await dispatch(editQuestion(editedQuestion));
    if (editReturn) {
      setShowModal(false);

    }
  };
  if (sessionUser.id == question.ownerId) {
    return (
      <>
        <button className="modal-buttons-ed" onClick={() => setShowModal(true)}>Edit</button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <div className="edit-modal">
              <h1 className="edit-h1">Edit Question</h1>
              <form>
                <ul>
                  {errors.map((error) => (
                    <li key={error}>{error}</li>
                  ))}
                </ul>
                <textarea
                  // id="description_textarea"
                 className="text-box"
                  value={editedQuestionContent}
                  onChange={(e) => setEditedQuestionContent(e.target.value)}
                ></textarea>
                <div className="modal-button">

                <button className="nav-button" onClick={(e) => handleEdit(e, question.id)}>
                  Save
                </button>
                <button className="nav-button" onClick={() => setShowModal(false)}>Cancel</button>
                </div>
              </form>
            </div>
          </Modal>
        )}
      </>
    );
  } else return <></>;
}

export default EditFormModal;
