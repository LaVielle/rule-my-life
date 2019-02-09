import { combineReducers } from 'redux'
import decisions from './decisions'
import currentUser from './currentUser'

export default combineReducers({
  decisions,
  currentUser
})
