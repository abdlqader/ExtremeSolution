import { FETCH_USERS } from '../services/types';
import axios from 'axios';
export const fetchUsers = (token) => (dispatch) => {
  axios
    .get(`${process.env.REACT_APP_API_URL}/art`, {
      headers: { Authorization: `${token}` },
    })
    .then((response) => {
      dispatch({
        type: FETCH_USERS,
        payload: {
          users: response.data,
        },
      });
    });
};
