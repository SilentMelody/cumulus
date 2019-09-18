import React from 'react'
import ReactDOM from 'react-dom'

import 'lib-flexible'
import {Provider} from 'react-redux'
import store from './src/store'
import RouterCore from './src/router/index.jsx'

import './src/style/scss/base.less'
import 'antd/dist/antd.less'

ReactDOM.render(
  <Provider store={store}>
    <RouterCore/>
  </Provider>,
  document.getElementById('root')
)
