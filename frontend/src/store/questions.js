import { csrfFetch } from "./csrf";

const LOAD_QUESTIONS = "questions/LOAD_QUESTIONS";
const ADD_QUESTION = "questions/ADD_QUESTION";
const REMOVE_QUESTION = "questions/REMOVE_QUESTION";
const EDIT_QUESTION = "questions/EDIT_QUESTION";

const loadQuestions = (questions) => ({
  type: LOAD_QUESTIONS,
  questions,
});

const addQuestion = (questions) => ({
  type: ADD_QUESTION,
  questions,
});

const removeQuestion = (questionId) => ({
  type: REMOVE_QUESTION,
  questionId,
});

const putQuestion = (question) => ({
  type: EDIT_QUESTION,
  question,
});

export const editQuestion = (editedQuestion) => async (dispatch) => {
  const { id, content } = editedQuestion;
  const response = await csrfFetch(`/api/questions/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id,
      content,
    }),
  });

  if (response.ok) {
    const updatedQuestion = await response.json();
    dispatch(putQuestion(updatedQuestion));
    return updatedQuestion;
  }
};

export const deleteQuestion = (question) => async (dispatch) => {
  const response = await csrfFetch(`/api/questions/${question.id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(question),
  });

  const deleted = await response.json()
  if (response.ok) {
    dispatch(removeQuestion(question.id));
    // return true;
  }
};

export const addQuestionForm = (payload) => async (dispatch) => {
  const response = await csrfFetch(`/api/questions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (response.ok) {
    const question = await response.json();
    dispatch(addQuestion(question));
    return question;
  }
};

export const getQuestions = () => async (dispatch) => {
  const response = await fetch(`/api/questions`);

  if (response.ok) {
    const questions = await response.json();
    dispatch(loadQuestions(questions));
  }
};


const initialState = {};

const questionsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOAD_QUESTIONS:
      newState = { ...state };
      newState.questions = action.questions;
      return newState;
    case ADD_QUESTION:
      newState = { ...state };
      newState.questions = [action.questions, ...state.questions];
      return newState;
    case REMOVE_QUESTION:
      newState = JSON.parse(JSON.stringify(state));
      for (let i = 0; i < newState.questions.length; i++) {
        if (newState.questions[i].id === action.questionId) {
          delete newState.questions[i];
        }
      }
      // console.log(action.questionId)
      // console.log(newState.questions)

      return newState;
    case EDIT_QUESTION:
      newState = JSON.parse(JSON.stringify(state));
    for (let i = 0; i < newState.questions.length; i++) {
      if (newState.questions[i].id === action.question.id) {
        newState.questions[i] = action.question;
      }
    }
    return newState;
    default:
      return state;
  }
};

export default questionsReducer;
