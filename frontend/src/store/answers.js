import { csrfFetch } from "./csrf";
const LOAD_ANSWERS = "answers/LOAD_ANSWERS";
const ADD_ANSWER = "answers/ADD_ANSWER";
const REMOVE_ANSWER = "answers/REMOVE_ANSWER";
const EDIT_ANSWER = "answers/EDIT_ANSWER";

const loadAnswers = (answers) => ({
  type: LOAD_ANSWERS,
  answers,
});

const addQuestion = (answers) => ({
  type: ADD_ANSWER,
  answers,
});

const removeQuestion = (answerId) => ({
  type: REMOVE_ANSWER,
  answerId,
});

const putQuestion = (answer) => ({
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
    dispatch(addAnswers(answer));
    return answer;
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
    default:
      return state;
  }
};

export default answersReducer;
