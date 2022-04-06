import axios from 'axios';

export const getPins = () => {
  return axios.get('/api/pins')
};

// export const getUserPins = id => {
//   return axios.get(`/api/pins/user/${id}`)
// };

export const postPin = data => {
  return axios.post('/api/pins/', data)
}

export const editPin = data => {
  return axios.patch(`/api/pins/${data._id}`, data)
}

export const deletePin = id => {
  return axios.delete(`/api/pins/${id}`)
}