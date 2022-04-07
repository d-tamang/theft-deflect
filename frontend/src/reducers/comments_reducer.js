import { RECEIVE_PIN_COMMENTS, RECEIVE_NEW_COMMENT, REMOVE_COMMENT } from "../actions/comment_actions";

const commentsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        // case RECEIVE_COMMENTS:
        //     return action.comments;
        case RECEIVE_PIN_COMMENTS:
            newState = {};
            for (let comment of action.comments.data) {
                newState[comment._id] = comment;
            }
            return newState;
        case RECEIVE_NEW_COMMENT:
            newState[action.comment.data._id] = action.comment.data;
            return newState;
        case REMOVE_COMMENT:
            delete newState[action.comment.data._id]
            return newState;
        default:
            return state;
    }
};

export default commentsReducer;