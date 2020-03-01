import jobReducer from './jobReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  job: jobReducer,
});

export default rootReducer