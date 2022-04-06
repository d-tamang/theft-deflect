import { RECEIVE_PINS, RECEIVE_NEW_PIN, REMOVE_PIN, RECEIVE_PIN_ERRORS } from '../actions/pin_actions';

const pinsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_PINS:
      for (let pin of action.pins.data) {
        newState[pin._id] = pin;
      }
      return newState;
    case RECEIVE_NEW_PIN:
      newState[action.pin.data._id] = action.pin.data;
      return newState;
    case REMOVE_PIN:
      delete newState[action.pin.data._id];
      return newState;
    default:
      return state;
  }
};

export default pinsReducer;