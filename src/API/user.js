import axios from 'axios'
const userAPI = {}

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
userAPI.signIn = function (data){
  return axios({
    url: origin + '/sign-in',
    method: 'POST',
    data,
  });
};

userAPI.signUp = function (data){
  return axios({
    url: origin + '/sign-up',
    method: 'POST',
    data,
  });
};

userAPI.changePassword = function (id,token,data) {
  return axios({
    url: `${origin}/change-password/${id}`,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${token}`
    },
    data,
  });
};

userAPI.signOut = function (id,token) {
  return axios({
    url: `${origin}/sign-out/${id}`,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${token}`
    },
  });
};

userAPI.showUser = function (id, token) {
  return axios({
    url: `${origin}/users/${id}`,
    method: 'GET',
    headers: {
      Authorization: `Token token=${token}`
    }
  });
};

userAPI.update = function (id,token,data) {
  return axios({
    url: `${origin}/update-user/${id}`,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${token}`
    },
    data
  });
};

export default userAPI
