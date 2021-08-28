import { NEW_ART, FETCH_ARTS, DELETE_ART, UPDATE_ART } from '../services/types';
import axios from 'axios';
export const fetchArts = (token) => (dispatch) => {
  axios
    .get(`${process.env.REACT_APP_API_URL}/art`, {
      headers: { Authorization: `${token}` },
    })
    .then((response) => {
      dispatch({
        type: FETCH_ARTS,
        payload: {
          arts: response.data,
        },
      });
    });
};

export const createArt = (token) => (dispatch) => {
  axios
    .post(`${process.env.REACT_APP_API_URL}/art`, {
      headers: { Authorization: `${token}` },
    })
    .then((response) => {
      dispatch({
        type: NEW_ART,
        payload: {
          arts: response.data,
        },
      });
    });
};

export const updateArt =
  ({ token, art }) =>
  (dispatch) => {
    axios
      .put(
        `${process.env.REACT_APP_API_URL}/art`,
        { user: { ...art } },
        {
          headers: { Authorization: `${token}` },
        }
      )
      .then((response) => {
        dispatch({
          type: UPDATE_ART,
          payload: {
            art: art,
          },
        });
      });
  };

export const deleteArt =
  ({ token, id }) =>
  (dispatch) => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/art`, {
        headers: { Authorization: `${token}` },
        data: { art: { id } },
      })
      .then((response) => {
        dispatch({
          type: DELETE_ART,
          payload: {
            art: { id: id },
          },
        });
      })
      .catch((error) => console.log('asdasd'));
  };
