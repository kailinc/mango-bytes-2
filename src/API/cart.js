import axios from 'axios'
const cartAPI = {}

const config = {
  production: {
    api: 'https://damp-hamlet-57878.herokuapp.com'
  },
  development: {
    api: 'http://localhost:4741'
  }
}

const origin = config[process.env.NODE_ENV].api

cartAPI.create = function (token,data) {
  return axios({
    url: `${origin}/carts`,
    method: 'POST',
    headers: {
      Authorization: `Token token=${token}`
    },
    data
  });
};

cartAPI.checkout = function (stripeToken, userToken, email, shipping, description, amount, currency, userId) {
  return axios({
    url: `${origin}/charges`,
    method: 'POST',
    headers: {
      Authorization: `Token token=${userToken}`
    },
    data: {
      charge: {
        stripeToken: stripeToken,
        email: email,
        shipping: shipping,
        description: description,
        amount: amount,
        currency: currency,
        userId: userId
      }
    }
   })
}

cartAPI.getOwnCart = function (id,token) {
  return axios({
    url: `${origin}/own-carts/${id}`,
    method: 'GET',
    headers: {
      Authorization: `Token token=${token}`
    }
  });
};


export default cartAPI
