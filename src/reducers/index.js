import { combineReducers } from 'redux';
import { artReducer } from './artReducer';
import { adminReducer } from './adminReducer';
import { authReducer } from './authReducer';

export default combineReducers({
  arts: artReducer,
  admin: adminReducer,
  auth: authReducer,
});
