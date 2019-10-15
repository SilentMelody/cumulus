import {connect} from 'react-redux'

import * as NoteActions from '../store/action/note.js'
import NotePage from '../components/note/index.jsx'

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

const NoteContainer = connect(
  mapStateToProps,
  mapDispatchToProps)(NotePage)

export default NoteContainer
