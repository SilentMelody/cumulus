import React, { useState } from 'react'
import '../../style/less/note.less'

import MarkdownPreview from '../../modules/markdownPreview/index.jsx'
import MarkdownEditor from '../../modules/markdownEditor/index.jsx'

function NotePage(props) {

  const [noteData, setNoteData] = useState('')

  return (
    <div id="note-page">
      <div className="nav-slide"></div>
      <div className="nav-content">
        <MarkdownEditor textChange={(value) => setNoteData(value)}></MarkdownEditor>
        <MarkdownPreview text={noteData}></MarkdownPreview>
      </div>
      <div className="sign">
        @李志豪
      </div>
    </div>
  )
}

export default NotePage
