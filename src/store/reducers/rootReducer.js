import jobReducer from './jobReducer'
import authReducer from './authReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  job: jobReducer,
  auth: authReducer
});

export default rootReducer
