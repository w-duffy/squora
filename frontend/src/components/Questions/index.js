import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { getQuestions } from "../../store/questions";
import { NavLink, Route, useParams } from "react-router-dom";
import {addQuestionForm} from "../../store/questions"

function QuestionForm() {
  //   const { questionId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => {
    return state.session.user;
  });
  const [description, setDescription] = useState("");
  const [ownerId, setOwnerId] = useState(sessionUser.id)


  const setDescriptionWrapper = (e) => {
    setDescription(e.target.value);
  };

  const postQuestion = async (e) => {
    e.preventDefault()
    const payload = {
      ownerId,
      description,
    };

    let createdQuestion = await dispatch(addQuestionForm(payload))
    if(createdQuestion){
      setDescription("")
    }
  };

  return (
    <div id="question-container">
      <form onSubmit={postQuestion}>
      <textarea
      id="description_textarea"
      placeholder={"What is your question or link?"}
      value={description}
      onChange={setDescriptionWrapper}>
      </textarea>
      <button type="submit">
        Add Question
      </button>
        </form>
    </div>
  );
}

export default QuestionForm;
