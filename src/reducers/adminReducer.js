import { FETCH_USERS } from '../services/types';

const intialState = {
  users: [],
};

export const adminReducer = (state = intialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        users: action.payload.users,
      };
    default:
      return state;
  }
};
