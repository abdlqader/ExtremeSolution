import { LOGIN } from '../services/types';
import axios from 'axios';
import { createBrowserHistory } from 'history';

export default createBrowserHistory();
export const authLogin =
  ({ username, password, history }) =>
  (dispatch) => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/Login`, {
        credentials: { username, password },
      })
      .then((response) => {
        dispatch({
          type: LOGIN,
          payload: {
            token: response.data.token,
            role: response.data.role,
            username: response.data.username,
          },
        });
        history.push('/');
      });
  };
