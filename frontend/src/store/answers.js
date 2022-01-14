import { csrfFetch } from "./csrf";
const LOAD_ANSWERS = "answers/LOAD_ANSWERS";
const ADD_ANSWER = "answers/ADD_ANSWER";
const REMOVE_ANSWER = "answers/REMOVE_ANSWER";
const EDIT_ANSWER = "answers/EDIT_ANSWER";

const loadAnswers = (answers) => ({
  type: LOAD_ANSWERS,
  answers,
});

const addAnswer = (answers) => ({
  type: ADD_ANSWER,
  answers,
});

const removeAnswer = (answerId) => ({
  type: REMOVE_ANSWER,
  answerId,
});

const putAnswer = (answer) => ({
  type: EDIT_ANSWER,
  answer,
});

export const getAnswers = () => async (dispatch) => {
  const response = await fetch(`/api/answers`);

  if (response.ok) {
    const answers = await response.json();
    dispatch(loadAnswers(answers));
  }
};

export const addAnswers = (payload) => async (dispatch) => {
  const response = await csrfFetch(`/api/answers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (response.ok) {
    const answer = await response.json();
    dispatch(addAnswer(answer));
    return answer;
  }
};

export const deleteAnswer = (answer) => async (dispatch) => {

  const response = await csrfFetch(`/api/answers/${answer.id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(answer),
  });
  const deleted = await response.json()

  if (response.ok) {
    dispatch(removeAnswer(answer.id));
    // return true;
  }
};

export const editAnswer = (editedAnswer) => async (dispatch) => {
  const { id, content } = editedAnswer;
  const response = await csrfFetch(`/api/answers/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id,
      content,
    }),
  });

  if (response.ok) {
    const updatedAnswer = await response.json();
    console.log("EDITED ANSWWER", updatedAnswer)
    dispatch(putAnswer(updatedAnswer));
    return updatedAnswer;
  }
};

const initialState = {};

const answersReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOAD_ANSWERS:
      newState = { ...state };
      newState.answers = action.answers;
      return newState;
    case ADD_ANSWER:
      newState = { ...state };
      newState.answers = [action.answers, ...state.answers];
      return newState;
      case REMOVE_ANSWER:
        newState = JSON.parse(JSON.stringify(state));
        for (let i = 0; i < newState.answers.length; i++) {
          if (newState.answers[i].id === action.answerId) {
            delete newState.answers[i];
          }
        }
        return newState;
        case EDIT_ANSWER:
          newState = JSON.parse(JSON.stringify(state));
        for (let i = 0; i < newState.answers.length; i++) {
          if (newState.answers[i].id === action.answer.id) {
            newState.answers[i] = action.answer;
          }
        }
        return newState;
    default:
      return state;
  }
};

export default answersReducer;
