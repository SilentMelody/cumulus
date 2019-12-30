import {connect} from 'react-redux'

import * as NoteActions from '../store/action/note'
import NotePage from '../components/note/index.jsx'

const mapStateToProps = (state) => {
  return {
    noteList: state.noteReducer.noteList,
    noteClassifyList: state.noteReducer.noteClassifyList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSelectAllNoteList: () => {
      dispatch(NoteActions.selectAll())
    },
    onSelectClassify: () => {
      dispatch(NoteActions.selectClassify())
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
