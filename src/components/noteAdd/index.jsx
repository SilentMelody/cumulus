import React, {useEffect, useState} from 'react'
import '../../style/less/noteAdd.less'
import { Cascader } from 'antd'

import MarkdownPreview from '../../modules/markdownPreview/index.jsx'
import MarkdownEditor from '../../modules/markdownEditor/index.jsx'

function NoteAddPage(props) {

  const {onNoteAdd, onSelectClassify, noteClassifyList, imgUpload} = props
  const [noteData, setNoteData] = useState('')
  const [classifyOptions, setClassifyOptions] = useState([])
  const [title, setTitle] = useState('')
  const [classifyId, setClassifyId] = useState(0)

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
    value instanceof Array ? setClassifyId(value[1]) : ''
  }

  const noteSave = () => {
    const param = {
      title: title,
      text: noteData,
      classifyId: classifyId
    }
    console.log(param)
    onNoteAdd(param)
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
      标题：<input type="text" onChange={(e) => setTitle(e.target.value)}/>
      <Cascader
        options={classifyOptions}
        expandTrigger="hover"
        onChange={onClassifyChange}
      />
      <div className="nav-content">
        <MarkdownEditor onUploadImg={imgUpload} textChange={(value) => setNoteData(value)}></MarkdownEditor>
        <MarkdownPreview text={noteData}></MarkdownPreview>
      </div>
      <div className="submit-btn" onClick={() => noteSave()}>提交</div>
    </div>
  )
}

export default NoteAddPage
