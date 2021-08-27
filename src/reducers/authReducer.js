import { LOGIN } from '../services/types';

const intialState = {
  token: '',
  role: '',
  name: '',
};

export const authReducer = (state = intialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        token: action.payload.token,
        role: action.payload.role,
      };
    default:
      return state;
  }
};
