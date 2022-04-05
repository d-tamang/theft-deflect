import { combineReducers } from "redux";
import pinsReducer from './pins_reducer';
import usersReducer from './users_reducer';
import commentsReducer from "./comments_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  pins: pinsReducer,
  comments: commentsReducer
});

export default entitiesReducer;