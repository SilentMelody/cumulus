import axios from './axios'

import {API_DEFAULT_CONFIG} from './apiConfig'

// 封装axios get
export function axiosGet(url, params) {
  return axios({
    url: `${API_DEFAULT_CONFIG.baseURL}/${url}`,
    method: 'get',
    params,
    config: API_DEFAULT_CONFIG
  })
    .then(res => {
      if (res.data.code === 0) {
        return Promise.resolve(res.data)
      }
      return Promise.reject(res)
    })
    .catch(err => {
      return Promise.reject(err)
    })
}

// 封装axios post
export function axiosPost(url, data) {
  return axios({
    url: `${API_DEFAULT_CONFIG.baseURL}${url}`,
    method: 'POST',
    data: data,
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => {
      if (res.data.code === 0) {
        return Promise.resolve(res.data)
      }
      return Promise.reject(res.data)
    })
    .catch(err => {
      return Promise.reject(err)
    })
}
