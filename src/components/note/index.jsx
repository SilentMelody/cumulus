import React, {useEffect, useState} from 'react'
import '../../style/less/note.less'

import MarkdownPreview from '../../modules/markdownPreview/index.jsx'
import MarkdownEditor from '../../modules/markdownEditor/index.jsx'
import PageList from "../../modules/pageList/index.jsx";
import NoteCard from "../../modules/noteCard/index.jsx";
import {instanceOf} from "prop-types";

function NotePage(props) {

  const {noteList, onSelectAllNoteList, onSelectClassify, noteClassifyList, onNoteAdd} = props
  const [noteData, setNoteData] = useState('')
  const [noteListLocal, setNoteListLocal] = useState([])

  useEffect(() => {
    // addNote();
    selectAllNote();
    selectAllClassify();
  }, []);

  useEffect(() => {
    (noteList instanceof Array) && noteList.length > 0 && allNoteInfoInit();
  }, [noteList]);

  useEffect(() => {
    (noteClassifyList instanceof Array) && noteClassifyList.length > 0 && allNoteInfoInit();
  }, [noteClassifyList]);

  const selectAllNote = () => {
    onSelectAllNoteList()
  }
  const selectAllClassify = () => {
    onSelectClassify()
  }

  const addNote = () => {
    const param = {
      title: 'title111',
      text: 'text111',
      classifyId: 2001
    }
    onNoteAdd(param)
  }

  const allNoteInfoInit = () => {
    const _noteList = noteList;
    const noteClassifyObj = {};
    noteClassifyList && noteClassifyList.forEach((item, index) => {
      noteClassifyObj[item.id] = {
        name: item.title
      }
    })
    _noteList && _noteList.forEach((item, index) => {
      item.classify_name = noteClassifyObj[item.classify_id] && noteClassifyObj[item.classify_id].name
    })
    setNoteListLocal(_noteList)
  }

  return (
    <div id="note-page" className="page-container">
      <PageList history={props.history}></PageList>
      <div className="main-container">
        <div className="nav-bar"></div>
        <div className="note-list-container">
          <div className="new-area">
            <div className="class-title">
              最新
            </div>
            <div className="class-main">
              {
                noteListLocal.map((item, index) => {
                  return (<NoteCard noteInfo={item} key={index} className="note-list-item"></NoteCard>)
                })
              }
            </div>
          </div>
        </div>
      </div>
      <div className="sign">
        @李志豪
      </div>
    </div>
  )
}

export default NotePage
