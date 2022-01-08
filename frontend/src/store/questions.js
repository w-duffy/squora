import { csrfFetch } from "./csrf";

const LOAD_QUESTIONS = "questions/LOAD_QUESTIONS";
const ADD_QUESTION = "questions/ADD_QUESTION";

const loadQuestions = (questions) => ({
  type: LOAD_QUESTIONS,
  questions,
});

const addQuestion = questions =>({
  type: ADD_QUESTION,
  questions,
})

export const addQuestionForm = (payload) => async dispatch => {
  const response = await csrfFetch(`/api/questions`, {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
  },
    body: JSON.stringify(payload)
  });

  if (response.ok) {
    const list = await response.json();
    dispatch(addQuestion(list));
    return list;
  }
};

export const getQuestions = () => async (dispatch) => {
  const response = await fetch(`/api/questions`);

  if (response.ok) {
    const questions = await response.json();
    dispatch(loadQuestions(questions));
    return questions;
  }
};

const initialState = {
    questions: [],
};


const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_QUESTIONS: {
      return {
        ...state,
        questions: action.questions
      };
    }
    case ADD_QUESTION: {
      const newState = {
        ...state,
        [action.questions.id]: action.questions
      }
      return newState;
    }
    default:
      return state;
  }
};

export default questionsReducer;
