import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import questionsReducer, { getQuestions } from "../../store/questions";
import { NavLink, Route, useParams } from "react-router-dom";
import QuestionForm from '../Questions'
import {deleteQuestion} from "../../store/questions"
import DeleteFormModal from "./DeleteFormModal";
import EditFormModal from "./EditFormModal";
import { useHistory } from "react-router-dom";

function Feed() {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const [deleteClick, setDeleteClick] = useState(null);

  const history = useHistory();


  const questions = useSelector(state => state.questions.questions);

  const [stateChange, setStateChange] = useState("no")



  useEffect(() => {
     dispatch(getQuestions());
  }, []);


  if (!questions) {
    return null;
  }

  return (

    <div>
        <QuestionForm />
      {questions.map((question) => (
        <div key={question.id + 1}>
            {/* <p>{question.User.username}</p> */}
            <p>{question.description}</p>
            <DeleteFormModal question={question} />
            <EditFormModal question={question} />
        </div>
      ))}
    </div>

  )
}

export default Feed;
