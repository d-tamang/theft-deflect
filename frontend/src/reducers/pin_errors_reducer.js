import {
    RECEIVE_PIN_ERRORS
} from '../actions/pin_actions';

const pinErrorsReducer = (state=[], action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_PIN_ERRORS:
            return action.errors.response.data;
        default: 
            return [];
    }
}

export default pinErrorsReducer;

// import {
//     RECEIVE_PIN_ERRORS
// } from '../actions/pin_actions';

// const pinErrorsReducer = (state=[], action) => {
//     Object.freeze(state);
//     switch(action.type){
//         case RECEIVE_PIN_ERRORS:
//             if (action.errors) {
//                 return action.errors;
//             } else {
//                 return [];
//             }
//         default: 
//             return [];
//     }
// }

// export default pinErrorsReducer;