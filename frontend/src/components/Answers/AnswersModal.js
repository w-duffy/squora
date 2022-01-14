import React, { useState, useEffect } from "react";
import { Modal } from "../../context/Modal";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { addAnswers, getAnswers } from "../../store/answers";
import "../Questions/Questions.css";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

function AnswersModal({question}) {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => {
    return state.session.user;
  });
  const [answer, setAnswer] = useState("");
  const [ownerId, setOwnerId] = useState(sessionUser.id);
  const [errors, setErrors] = useState([]);
  const answers = useSelector((state) => state.answers.answers);



  const setAnswerWrapper = (e) => {
    setAnswer(e.target.value);
  };

  const postAnswer = async (e) => {
    e.preventDefault();
    const payload = {
      ownerId,
      answer,
      questionId: question.id,
    };
    console.log("PAYLOAD", payload)

    if (answer.length > 255) {
      return setErrors(["Your answer must be less than 255 characters."]);
    }

     if (answer === "") {
      return setErrors(["You cannot submit a blank answer."]);
    }
    toast("Your answer has been successfully posted!", {
      position: toast.POSITION.TOP_CENTER, autoClose:3000})
    let createdAnswer = await dispatch(addAnswers(payload));
    if (createdAnswer) {
      setAnswer("");
      setShowModal(false);
      setErrors([]);
    }
  };

  useEffect(async () => {
    await getAnswers()
    setShowModal(false);
  }, []);

  let showThis = answers.filter(a =>{
    return a.questionId === question.id
  })
  console.log(showThis)
  if(!showThis.length){

    return (
      <>
      <button onClick={() => setShowModal(true)} className="modal-answer-button">

      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div id="question-container">
            <div className="edit-modal">
              <h1 className="edit-h1">What is your Answer?</h1>

              <form onSubmit={postAnswer}>
                <ul>
                  {errors.map((error) => (
                    <li key={error}>{error}</li>
                    ))}
                </ul>
                <textarea
                  id="description_textarea"
                  className="text-box"
                  // className="text-box"
                  placeholder={"What is your answer?"}
                  value={answer}
                  onChange={setAnswerWrapper}
                  ></textarea>
                <div className="question-modal-button">
                  <button className="nav-button" type="submit">
                    Add Answer
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
} return <div></div>
}

export default AnswersModal;
