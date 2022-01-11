import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import questionsReducer, { getQuestions } from "../../store/questions";
import DeleteFormModal from "./DeleteFormModal";
import EditFormModal from "./EditFormModal";
import { useHistory } from "react-router-dom";
import QuestionModal from '../Questions/QuestionModal'
import './Feed.css'



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
      <div className="ask-question">
        <QuestionModal />
      </div>
      {questions.map((question) => (
        <div className="ask-question" key={question.id}>
            {/* <p>{question.User.username}</p> */}
            <p className="p-description">{question.description}</p>
            <DeleteFormModal question={question} />
            <EditFormModal question={question} />
        </div>
      ))}
    </div>

  )
}

export default Feed;
