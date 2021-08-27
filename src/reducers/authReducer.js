import { LOGIN } from '../services/types';

const intialState = {
  token: '',
  role: '',
  name: '',
};

export const authReducer = (state = intialState, action) => {
  switch (action.type) {
    case LOGIN:
      console.log(action)
      return {
        ...state,
        token: action.payload.token,
        role: action.payload.role,
        name: action.payload.name,
      };
    default:
      return state;
  }
};
