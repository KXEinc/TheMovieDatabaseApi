import { combineReducers } from 'redux'
import uiReducer from './uiReducer'
import displayReducer from './displayReducer'

export default combineReducers({
  ui: uiReducer,
  display: displayReducer
})