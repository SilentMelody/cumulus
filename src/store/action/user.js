import * as ActionTypes from '../actionType/user'
import {axiosGet, axiosPost} from '../../plugins/api'

export const login = (loginInfo) => dispatch => {
  axiosPost('/login', loginInfo).then(data => {
    console.log(data)
    dispatch({
      type: ActionTypes.USER_LOGIN,
      payload: loginInfo
    })
  }).catch(e => {
    console.log(e)
  })
  // return {
  //   type: ActionTypes.USER_LOGIN,
  //   payload: loginInfo
  // }
}
