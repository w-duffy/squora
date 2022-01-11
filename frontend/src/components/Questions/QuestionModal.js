import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { addQuestionForm } from "../../store/questions";
import "./Questions.css";

function QuestionModal() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => {
    return state.session.user;
  });
  const [description, setDescription] = useState("");
  const [ownerId, setOwnerId] = useState(sessionUser.id);
  const [errors, setErrors] = useState([]);

  const setDescriptionWrapper = (e) => {
    setDescription(e.target.value);
  };

  const postQuestion = async (e) => {
    e.preventDefault();
    const payload = {
      ownerId,
      description,
    };
    if (description === "") {
      return setErrors(["You cannot submit a blank question."]);
    }

    let createdQuestion = await dispatch(addQuestionForm(payload));
    if (createdQuestion) {
      setDescription("");
      setShowModal(false);
    }
  };

  return (
    <>
      <div onClick={() => setShowModal(true)} className="question-click">
        <div className="d-username">{sessionUser.username}</div>
        <p className="p-question">What is your Question?</p>
      </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div id="question-container">
            What is your question?
            <form onSubmit={postQuestion}>
              <ul>
                {errors.map((error) => (
                  <li key={error}>{error}</li>
                ))}
              </ul>
              <textarea
                id="description_textarea"
                placeholder={"What is your question or link?"}
                value={description}
                onChange={setDescriptionWrapper}
              ></textarea>
              <button type="submit">Add Question</button>
            </form>
          </div>
        </Modal>
      )}
    </>
  );
}

export default QuestionModal;
