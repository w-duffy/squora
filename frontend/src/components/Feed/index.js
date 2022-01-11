import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuestions } from "../../store/questions";
import { getUsers } from "../../store/user";
import DeleteFormModal from "./DeleteFormModal";
import EditFormModal from "./EditFormModal";
import { useHistory } from "react-router-dom";
import QuestionModal from '../Questions/QuestionModal'
import './Feed.css'



function Feed() {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const [deleteClick, setDeleteClick] = useState(null);
  const [loaded, setLoaded] = useState(false);

  const history = useHistory();


  const questions = useSelector(state => state.questions.questions);
  const users = useSelector(state => state.users.users);


  const [stateChange, setStateChange] = useState("no")



  useEffect( async () => {
    await dispatch(getUsers())
     await dispatch(getQuestions());
     await setLoaded(true)
  }, []);


  if (!questions) {
    return null;
  }

if (loaded){
  return (

    <div>
      <div className="ask-question">
        <QuestionModal />
      </div>
      {questions.map((question) => (
        <div className="ask-question" key={question.id}>
            {users.map((user) => (user.id === question.ownerId?
              <div key={Math.random()}>
              <p>{user.username}</p>
              </div>
              : <></>
              ))}
            <div>
              <div>
            <p className="p-description">{question.description}</p>
              </div>
            <DeleteFormModal question={question} />
            <EditFormModal question={question} />
            </div>
        </div>
      ))}
    </div>

)
} else return <></>
}

export default Feed;
