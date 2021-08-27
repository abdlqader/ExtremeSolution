import { LOGIN } from '../services/types';

export const authLogin = (authData) => (dispatch) => {
  console.log(authData);
  dispatch({
    type: LOGIN,
    payload: { token: 'sad', role: 'ADMIN', name: 'name' },
  });
};
