import { getPins, getUserPins, postPin, editPin, deletePin } from '../util/pin_api_util';

export const RECEIVE_PINS= "RECEIVE_PINS";
export const RECEIVE_USER_PINS = "RECEIVE_USER_PINS";
export const RECEIVE_NEW_PIN = "RECEIVE_NEW_PIN";
export const REMOVE_PIN = "REMOVE_PIN";
export const RECEIVE_PIN_ERRORS = "RECEIVE_PIN_ERRORS";

const receivePins = pins => ({
  type: RECEIVE_PINS,
  pins
});

// const receiveUserPins = pins => ({
//   type: RECEIVE_USER_PINS,
//   pins
// });

const receiveNewPin = pin => ({
  type: RECEIVE_NEW_PIN,
  pin
})

const removePin = pin => ({
  type: REMOVE_PIN,
  pin
})

const receivePinErrors = errors => ({
  type: RECEIVE_PIN_ERRORS,
  errors
})

export const fetchPins = () => dispatch => (
  getPins()
    .then(pins => dispatch(receivePins(pins)))
    .catch(err => dispatch(receivePinErrors(err)))
);

// export const fetchUserPins = id => dispatch => (
//   getUserPins(id)
//     .then(pins => dispatch(receiveUserPins(pins)))
//     .catch(err => dispatch(receivePinErrors(err)))
// );

export const createPin = data => dispatch => (
  postPin(data)
    .then(pin => dispatch(receiveNewPin(pin)))
    .catch(err => dispatch(receivePinErrors(err)))
);

export const updatePin = data => dispatch => (
  editPin(data)
    .then(pin => dispatch(receiveNewPin(pin)))
    .catch(err => dispatch(receivePinErrors(err)))
);

export const destroyPin = id => dispatch => (
  deletePin(id)
    .then(pin => dispatch(removePin(pin)))
    .catch(err => dispatch(receivePinErrors(err)))
);