const LOAD_QUESTIONS = "questions/LOAD_QUESTIONS";

const loadQuestions = (questions) => ({
  type: LOAD_QUESTIONS,
  questions,
});

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
    default:
      return state;
  }
};

export default questionsReducer;
