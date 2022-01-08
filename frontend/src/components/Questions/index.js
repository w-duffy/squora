import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { getQuestions } from "../../store/questions";
import { NavLink, Route, useParams } from "react-router-dom";

function QuestionsLoad() {
//   const { questionId } = useParams();
  const dispatch = useDispatch();

  const questions = useSelector((state) => {return state.questionsReducer.questions
  });

  const user =

  useEffect(() => {
    dispatch(getQuestions());
  }, []);

  if (!questions) {
    return null;
  }

  return (
    <main>
      <div>
          {questions.map((question) =>(
              <p key={question.id}>{question.User.username}</p>
         ))}
      </div>
    </main>
  );
}

export default QuestionsLoad;
