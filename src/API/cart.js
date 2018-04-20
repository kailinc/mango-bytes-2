import axios from 'axios'
const API = {}

API.checkout = function (stripeToken, userToken, email, shipping, description, amount, currency, userId) {
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

API.getOwnCart = function (id,token) {
  return axios({
    url: `${origin}/own-carts/${id}`,
    method: 'GET',
    headers: {
      Authorization: `Token token=${token}`
    }
  });
};


export default API
