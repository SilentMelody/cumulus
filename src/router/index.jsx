import React from 'react'
import Loadable from 'react-loadable';
import {HashRouter as Router, Link, Route, Switch, BrowserRouter} from 'react-router-dom'

// import Home from '../containers/home.js'
// import Note from '../containers/note.js'
// import NoteAdd from '../containers/noteAdd.js'
import Loading from '../components/loading'

const Home = Loadable({  loader: () => import(/* webpackChunkName: "home" */ `../containers/home.js`), loading: Loading,});
const Note = Loadable({  loader: () => import(/* webpackChunkName: "note" */ `../containers/note.js`), loading: Loading,});
const NoteAdd = Loadable({  loader: () => import(/* webpackChunkName: "noteAdd" */ `../containers/noteAdd.js`), loading: Loading,});

function RouterCore(props) {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/home' component={Home}/>
        <Route exact path='/笔记' component={Note}/>
        <Route path='/笔记/add' component={NoteAdd}/>
        {/*<Route path='/To-Do' component={Home}/>*/}
        {/*<Route path='/收藏' component={Home}/>*/}
        {/*<Route path='/留言板' component={Home}/>*/}
        {/*<Route path='/个人信息' component={Home}/>*/}
      </Switch>
    </Router>
  )
}

export default RouterCore
