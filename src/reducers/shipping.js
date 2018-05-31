const shippingReducerDefaultState = {
  address: {
    line1: '',
    line2: '',
    city: '',
    postal_code: 0,
    state: '',
    country: ''
  },
  name: '',
  phone: 0
};

const shippingReducer = (state = shippingReducerDefaultState, action) => {
  switch (action.type) {
    case 'NEW_SHIPPING':
      return {
        ...state,
        address: action.shipping.address,
        name: action.shipping.name,
        phone: action.shipping.phone
      }
    case 'RESET_SHIPPING':
      return {
        ...state,
        ...shippingReducerDefaultState
      };
    default:
      return state;
  }
};

export default shippingReducer
