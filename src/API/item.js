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

API.getItems = function () {
  return axios({
    url: `${origin}/items`,
    method: 'GET'
  });
};

API.getItem = function (id) {
  return axios({
    url: `${origin}/items/${id}`,
    method: 'GET'
  });
};

export default API
