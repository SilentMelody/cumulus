import React, {useEffect, useState} from 'react'
import '../../style/less/noteAdd.less'
import { Cascader } from 'antd'

import MarkdownPreview from '../../modules/markdownPreview/index.jsx'
import MarkdownEditor from '../../modules/markdownEditor/index.jsx'

function NoteAddPage(props) {

  const {onNoteAdd, onSelectClassify, noteClassifyList, imgUpload} = props
  const [noteData, setNoteData] = useState('')
  const [classifyOptions, setClassifyOptions] = useState([])

  const addNote = () => {
    const param = {
      title: 'title111',
      text: 'text111',
      classifyId: 2001
    }
    onNoteAdd(param)
  }

  const initClassify = () => {
    const classify = {
      level1: [],
      level2: [],
      level3: []
    }
    noteClassifyList.map((item, index) => {
      classify['level' + item.level].push(item)
    })
    console.log(classify)
  }

  const initClassifyOptions = () => {
    const classifyOptions = [];
    noteClassifyList.map((item, index) => {
      const option = {
        value: item.id,
        label: item.title,
        children: []
      }
      if(item.level === 1) {
        classifyOptions.push(option)
      }
      if(item.level === 2) {
        const parentLevel = classifyOptions.find((level_1_Item) => {
          return level_1_Item.value === item.parent_id
        })
        parentLevel && parentLevel.children.push(option)
      }
    })
    setClassifyOptions(classifyOptions)
  }

  const onClassifyChange = (value) => {
    console.log(value)
  }

  useEffect(() => {
    onSelectClassify()
  }, [])

  useEffect(() => {
    initClassify()
    initClassifyOptions()
  }, [noteClassifyList])

  return (
    <div id="note-add-page">
      <Cascader
        options={classifyOptions}
        expandTrigger="hover"
        onChange={onClassifyChange}
      />
      <div className="nav-content">
        <MarkdownEditor onUploadImg={imgUpload} textChange={(value) => setNoteData(value)}></MarkdownEditor>
        <MarkdownPreview text={noteData}></MarkdownPreview>
      </div>
    </div>
  )
}

export default NoteAddPage
