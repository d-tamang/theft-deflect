import { getComments, getUserComments, postComment, editComment, deleteComment } from "../util/comment_api_util";

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_USER_COMMENTS = "RECEIVE_USER_COMMENTS";
export const RECEIVE_NEW_COMMENT = "RECEIVE_NEW_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

const receiveComments = comments => ({
    type: RECEIVE_COMMENTS,
    comments
});

const receiveUserComments = comments => ({
    type: RECEIVE_USER_COMMENTS,
    comments
});

const receiveNewComment = comment => ({
    type: RECEIVE_NEW_COMMENT,
    comment
});

const removeComment = comment => ({
    type: REMOVE_COMMENT,
    comment
});

export const fetchComments = () => dispatch => (
    getComments()
        .then(comments => dispatch(receiveComments(comments)))
        .catch(err => console.log(err))
);

export const fetchUserComments = id => dispatch => (
    getUserComments(id)
        .then(comments => dispatch(receiveUserComments(comments)))
        .catch(err => console.log(err))
);

export const createComment = data => dispatch => (
    postComment(data)
        .then(comment => dispatch(receiveNewComment(comment)))
        .catch(err => console.log(err))
);

export const updateComment = data => dispatch => (
    editComment(data)
        .then(comment => dispatch(receiveNewComment(comment)))
        .catch(err => console.log(err))
);

export const destroyComment = id => dispatch => (
    deleteComment(id)
        .then(comment => dispatch(removeComment(comment)))
        .catch(err => console.log(err))
);