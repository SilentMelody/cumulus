import * as ActionTypes from '../actionType/note'
import {axiosGet, axiosPost} from '../../plugins/api'

// 图片上传
export const imgUpload = (file) => dispatch => {
  const formData = new FormData()
  formData.append('img', file, {type: 'text/plain'})
  axiosPost('/file/uploadImg', formData).then(data => {
    console.log(data)
  }).catch(e => {
    console.log(e)
  })
}
