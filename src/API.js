import axios from 'axios'
const API = {}

const config = {
  production: {
    api: 'https://damp-hamlet-57878.herokuapp.com'
  },
  development: {
    api: 'http://localhost:4741'
  }
}

const origin = config[process.env.NODE_ENV].api

// USER API
API.signIn = function (data){
  return axios({
    url: origin + '/sign-in',
    method: 'POST',
    data,
  });
};

API.signUp = function (data){
  return axios({
    url: origin + '/sign-up',
    method: 'POST',
    data,
  });
};

// API.changePassword = function (data) {
//   return axios({
//     url: `${origin}/change-password/${store.user.id}`,
//     method: 'PATCH',
//     headers: {
//       Authorization: `Token token=${store.user.token}`,
//     },
//     data,
//   });
// };
//
// API.signOut = function () {
//   return axios({
//     url: `${origin}/sign-out/${store.user.id}`,
//     method: 'DELETE',
//     headers: {
//       Authorization: `Token token=${store.user.token}`,
//     },
//   });
// };


export default API
