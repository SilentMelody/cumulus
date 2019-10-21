import {combineReducers, applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import userReducer from './reducer/user'
import noteReducer from './reducer/note'

const reducers = combineReducers({
  userReducer,
  noteReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store

