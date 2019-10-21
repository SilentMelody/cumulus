import {connect} from 'react-redux'

import * as NoteActions from '../store/action/note'
import NotePage from '../components/note/index.jsx'

const mapStateToProps = (state) => {
  return {
    noteList: state.noteReducer.noteList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSelectAllNoteList: () => {
      dispatch(NoteActions.selectAll())
    },
    onNoteAdd: (noteData) => {
      dispatch(NoteActions.addNote(noteData))
    },
  }
}

const NoteContainer = connect(
  mapStateToProps,
  mapDispatchToProps)(NotePage)

export default NoteContainer
