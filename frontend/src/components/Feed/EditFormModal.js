import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { editQuestion } from "../../store/questions";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

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
        <button onClick={() => setShowModal(true)}>Edit</button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <div>
              <h1>Edit Question</h1>
              <form>
                <ul>
                  {errors.map((error) => (
                    <li key={error}>{error}</li>
                  ))}
                </ul>
                <textarea
                  id="description_textarea"
                  value={editedQuestionContent}
                  onChange={(e) => setEditedQuestionContent(e.target.value)}
                ></textarea>
                <button onClick={(e) => handleEdit(e, question.id)}>
                  Save
                </button>
                <button onClick={() => setShowModal(false)}>Cancel</button>
              </form>
            </div>
          </Modal>
        )}
      </>
    );
  } else return <></>;
}

export default EditFormModal;
