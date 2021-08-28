import { LOGIN } from '../services/types';

const intialState = {
  token: '',
  role: '',
  username: '',
};

export const authReducer = (state = intialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        token: action.payload.token,
        role: action.payload.role,
        username: action.payload.username,
      };
    default:
      return state;
  }
};
