import axios from 'axios';

export const getComments = () => {
    return axios.get('/api/comments')
};

export const getPinComments = id => {
    return axios.get(`/api/comments/pins/${id}`)
};

export const postComment = data => {
    return axios.post('/api/comments/', data)
}

export const editComment = data => {
    return axios.patch(`/api/comments/${data._id}`, data)
}

export const deleteComment = id => {
    return axios.delete(`/api/comments/${id}`)
}