import {combineReducers, applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import counterReducer from './reducer/counter'
import userReducer from './reducer/user'

const reducers = combineReducers({
  counterReducer,
  userReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store

