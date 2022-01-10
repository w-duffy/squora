import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import EditForm from "./EditForm";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { editQuestion } from "../../store/questions";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

function EditFormModal({ question }) {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const [description, setDescription] = useState(question.description);
  const [id, setId] = useState(question.id);
  const setDescriptionWrapper = (e) => {
    setDescription(e.target.value);
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    const editedQuestion = {
      id: question.id,
      description,
    };
    await dispatch(editQuestion(editedQuestion));
    setShowModal(false);
  };

  return (
    <>
      <button onClick={() => setShowModal(true)}>Edit</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div>
            <h1>Edit Question</h1>
            <form onSubmit={handleEdit}>
              <textarea
                id="description_textarea"
                value={description}
                onChange={setDescriptionWrapper}
              ></textarea>
              <button type="submit">Save</button>
              <button onClick={() => setShowModal(false)}>Cancel</button>
            </form>
          </div>
        </Modal>
      )}
    </>
  );
}

export default EditFormModal;
