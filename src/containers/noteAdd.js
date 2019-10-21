import {connect} from 'react-redux'

import * as NoteActions from '../store/action/note'
import * as FileActions from '../store/action/file'
import NoteAddPage from '../components/noteAdd/index.jsx'
import {axiosGet, axiosPost} from '../plugins/api'

const mapStateToProps = (state) => {
  return {
    noteClassifyList: state.noteReducer.noteClassifyList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onNoteAdd: (noteData) => {
      dispatch(NoteActions.addNote(noteData))
    },
    onSelectClassify: () => {
      dispatch(NoteActions.selectClassify())
    },
    onUploadImg: (file) => {
      dispatch(FileActions.imgUpload(file))
    },
    // 图片上传
    imgUpload: async (file) => {
      let resUrl = ''
      const formData = new FormData()
      formData.append('img', file, {type: 'text/plain'})
      await axiosPost('/file/uploadImg', formData).then(data => {
        if (data.code === 0) {
          const host = process.env.NODE_ENV === 'development' ? 'localhost:3001' : window.location.host
          resUrl = 'http://' + host + '/uploads/' + data.data
        }
      }).catch(e => {
        console.log(e)
      })
      return resUrl
    }
  }
}

const NoteAddContainer = connect(
  mapStateToProps,
  mapDispatchToProps)(NoteAddPage)

export default NoteAddContainer
