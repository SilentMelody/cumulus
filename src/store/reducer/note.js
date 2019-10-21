import * as ActionTypes from '../actionType/note'

const initialState = {
  noteList: [],
  noteClassifyList: []
}

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case ActionTypes.NOTE_SELECT_ALL:
      return Object.assign({}, state, {noteList: payload})
    case ActionTypes.NOTE_CLASSIFY_SELECT:
      return Object.assign({}, state, {noteClassifyList: payload})
    default:
      return state
  }
}

export default reducer
