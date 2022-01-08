import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { getQuestions } from "../../store/questions";
import { NavLink, Route, useParams } from "react-router-dom";

function QuestionsLoad() {
//   const { questionId } = useParams();
  const dispatch = useDispatch();



//   const question = useSelector((state) => {
//     return state.questionsReducer.questions.map((questionId) => state.questionsReducer.questions[questionId]);
//   });

  const questions = useSelector((state) => {return state.questionsReducer.questions
  });
console.log("QUESTIONS", questions)

//   const question = useSelector(state => {
//     return state.question.list.map(questionId => state.question[questionId]);
//   });

//   console.log("QUESTION", questions)


  useEffect(() => {
    dispatch(getQuestions());
  }, []);

//   if (!question) {
//     return null;
//   }

  return (
    <main>
      <div>
          {questions.map((question) =>(
              <p>{question.description}</p>
          ))}
      </div>
    </main>
  );
}

export default QuestionsLoad;
