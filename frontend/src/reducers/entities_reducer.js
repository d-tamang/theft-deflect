import { combineReducers } from "redux";
import pinsReducer from './pins_reducer';
import commentsReducer from "./comments_reducer";

const entitiesReducer = combineReducers({
  comments: commentsReducer,
  pins: pinsReducer,
});

export default entitiesReducer;