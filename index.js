import React from 'react'
import ReactDOM from 'react-dom'

import {Provider} from 'react-redux'
import store from './src/store'
import RouterCore from './src/router/index.jsx'

import './src/style/less/base.less'

console.log(process.env.NODE_ENV)

ReactDOM.render(
  <Provider store={store}>
    <RouterCore/>
  </Provider>,
  document.getElementById('root')
)
