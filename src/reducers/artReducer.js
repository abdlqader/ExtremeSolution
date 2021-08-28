import { FETCH_ARTS, NEW_ART, DELETE_ART, UPDATE_ART } from '../services/types';

const initialState = {
  arts: [],
  art: {},
};

export const artReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARTS:
      return {
        ...state,
        arts: action.payload.arts,
      };
    case NEW_ART:
      return {
        ...state,
        arts: state.arts.push(action.payload.art),
      };
    case UPDATE_ART:
      return {
        ...state,
        arts: state.arts.map((art) => {
          if (art.id === action.payload.art) return action.payload.art;
          else return art;
        }),
      };
    case DELETE_ART:
      return {
        ...state,
        arts: state.arts.filter((art) => art.id !== action.payload.art.id),
      };
    default:
      return state;
  }
};
