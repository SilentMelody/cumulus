import React from 'react'
import {HashRouter as Router, Link, Route, Switch} from 'react-router-dom'

import Home from '../containers/home.js'
import Note from '../containers/index.js'
import Login from '../containers/login.js'

function RouterCore(props) {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/home' component={Home}/>
        <Route path='/笔记' component={Note}/>
        <Route path='/login' component={Login}/>
        {/*<Route path='/To-Do' component={Home}/>*/}
        {/*<Route path='/收藏' component={Home}/>*/}
        {/*<Route path='/留言板' component={Home}/>*/}
        {/*<Route path='/个人信息' component={Home}/>*/}
      </Switch>
    </Router>
  )
}

export default RouterCore
