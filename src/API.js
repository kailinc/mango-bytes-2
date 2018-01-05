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

API.changePassword = function (id,token,data) {
  return axios({
    url: `${origin}/change-password/${id}`,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${token}`,
    },
    data,
  });
};

API.signOut = function (id,token) {
  return axios({
    url: `${origin}/sign-out/${id}`,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${token}`,
    },
  });
};

API.getItems = function () {
  return axios({
    url: `${origin}/items`,
    method: 'GET'
  });
};



export default API
