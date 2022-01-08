import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { getQuestions } from "../../store/questions";
import { NavLink, Route, useParams } from "react-router-dom";
import QuestionForm from '../Questions'

function Feed() {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const questions = useSelector((state) => {
    return state.questionsReducer.questions;
  });

  useEffect(() => {
    dispatch(getQuestions());
  }, [dispatch]);

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
        </div>
      ))}
    </div>
  </main>
  )
}

export default Feed;
