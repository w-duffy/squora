import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import sessionReducer from './session';
import questionsReducer from './questions';
import usersReducer from "./user";
import answersReducer from "./answers";
import upvotesReducer from "./upvotes";

const rootReducer = combineReducers({
  session: sessionReducer,
  questions: questionsReducer,
  users: usersReducer,
  answers: answersReducer,
  upvotes: upvotesReducer,
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
