import React, {useEffect, useState} from 'react'
import '../../style/less/note.less'

import MarkdownPreview from '../../modules/markdownPreview/index.jsx'
import MarkdownEditor from '../../modules/markdownEditor/index.jsx'
import PageList from "../../modules/pageList/index.jsx";

function NotePage(props) {

  const {noteList, onSelectAllNoteList, onNoteAdd} = props
  const [noteData, setNoteData] = useState('')

  const selectAllNote = () => {
    onSelectAllNoteList()
  }

  const addNote = () => {
    const param = {
      title: 'title111',
      text: 'text111',
      classifyId: 2001
    }
    onNoteAdd(param)
  }

  useEffect(() => {
    // addNote();
    selectAllNote();
  }, []);

  console.log(noteList);

  return (
    <div id="note-page" className="page-container">
      <PageList history={props.history}></PageList>
      <div className="main-container">
        <div className="nav-bar"></div>
      </div>
      <div className="sign">
        @李志豪
      </div>
    </div>
  )
}

export default NotePage
