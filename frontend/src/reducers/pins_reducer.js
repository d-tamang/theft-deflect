import { RECEIVE_PINS, RECEIVE_USER_PINS, RECEIVE_NEW_PIN, REMOVE_PIN } from '../actions/pin_actions';

const pinsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_PINS:
      return action.pins;
    // case RECEIVE_USER_PINS:
    //   return newState;
    case RECEIVE_NEW_PIN:
      newState[action.pin.id] = action.pin;
      return newState;
    case REMOVE_PIN:
      delete newState[action.pin.id]
      return newState;
    default:
      return state;
  }
};

export default pinsReducer;