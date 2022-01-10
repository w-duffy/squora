import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import questionsReducer, { getQuestions } from "../../store/questions";
import { NavLink, Route, useParams } from "react-router-dom";
import QuestionForm from '../Questions'
import {deleteQuestion} from "../../store/questions"
import DeleteFormModal from "./DeleteFormModal";
import EditFormModal from "./EditFormModal";

function Feed() {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const [deleteClick, setDeleteClick] = useState(null);


  const questions = useSelector((state) => state.questionsReducer.questions);
  const [stateChange, setStateChange] = useState("no")



  useEffect(() => {
     dispatch(getQuestions());
  }, [stateChange]);


  if (!questions) {
    return null;
  }


  return (
    <main>
    <div>
        <QuestionForm />
      {questions.map((question) => (
        <div key={question.id + 1}>
            <p>{question.User.username}</p>
            <p>{question.description}</p>
            <DeleteFormModal question={question} />
            <EditFormModal question={question} />
        </div>
      ))}
    </div>
  </main>
  )
}

export default Feed;
