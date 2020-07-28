import * as ActionTypes from '../actionType/note'
import {axiosGet, axiosPost} from '../../plugins/api'


// 查询所有笔记
export const selectAll = () => dispatch => {
  axiosGet('note/selectAll', {}).then(data => {
    dispatch({
      type: ActionTypes.NOTE_SELECT_ALL,
      payload: data.data.body
    })
  }).catch(e => {
    console.log(e)
  })
}

// 查询所有笔记分类
export const selectClassify = () => dispatch => {
  axiosGet('note/selectClassify', {}).then(data => {
    dispatch({
      type: ActionTypes.NOTE_CLASSIFY_SELECT,
      payload: data.data.body
    })
  }).catch(e => {
    console.log(e)
  })
}

// 新增笔记
export const addNote = (noteData) => dispatch => {
  axiosPost('/note/add', {...noteData}).then(data => {
    console.log(data)
    // dispatch({
    //   type: ActionTypes.NOTE_SELECT_ALL,
    //   payload: data.data.body
    // })
  }).catch(e => {
    console.log(e)
  })
}
