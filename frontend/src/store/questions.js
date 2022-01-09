import { csrfFetch } from "./csrf";

const LOAD_QUESTIONS = "questions/LOAD_QUESTIONS";
const ADD_QUESTION = "questions/ADD_QUESTION";
const REMOVE_QUESTION = "questions/REMOVE_QUESTION";

const loadQuestions = (questions) => ({
  type: LOAD_QUESTIONS,
  questions,
});

const addQuestion = questions =>({
  type: ADD_QUESTION,
  questions,
})

const removeQuestion = questions => ({
  type: REMOVE_QUESTION,
  questions
})


export const deleteQuestion = (question) => async dispatch => {
  const response = await csrfFetch(`/api/questions/${question.id}`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(question)
  });

  if (response.ok) {
    dispatch(removeQuestion(question));
    return question;
  }
};


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

// const initialState = {
//     questions: [],
// };

const initialState = {}


const questionsReducer = (state = initialState, action) => {
  let newState;

  switch (action.type) {
    case LOAD_QUESTIONS: {
        newState = { ...state }
        newState.questions = action.questions
        return newState
      }
    case ADD_QUESTION: {
       newState = Object.assign({}, state)
       newState = {...newState, ...action.payload}
      return newState;
    }
    case REMOVE_QUESTION: {
      newState = { ...state };
      return newState;
    }
    default:
      return state;
  }
};

export default questionsReducer;
