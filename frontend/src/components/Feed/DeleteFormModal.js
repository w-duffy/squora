import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import DeleteForm from "./DeleteForm";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { deleteQuestion } from "../../store/questions";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

function DeleteFormModal({ question }) {
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleDelete = async () => {
    await dispatch(deleteQuestion(question));
    setShowModal(false)
  };

  return (
    <>
      <button onClick={() => setShowModal(true)}>Delete</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div>
            <h1>Delete question</h1>
            <form onSubmit={handleDelete}>
              <button type="submit">Confirm</button>
              <button onClick={() => setShowModal(false)}>Cancel</button>
            </form>
          </div>
        </Modal>
      )}
    </>
  );
}

export default DeleteFormModal;
