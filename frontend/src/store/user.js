import { csrfFetch } from "./csrf";

const LOAD_USERS = "questions LOAD_USERS";
const loadUsers = (users) => ({
  type: LOAD_USERS,
  users,
});

export const getUsers = () => async (dispatch) => {
  const response = await fetch(`/api/users`);

  if (response.ok) {
    const users = await response.json();
    dispatch(loadUsers(users));
  }
};

const initialState = {};
const usersReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOAD_USERS:
      newState = { ...state };
      newState.users = action.users;
      return newState;
    default:
    return state;
  }
};

export default usersReducer;
