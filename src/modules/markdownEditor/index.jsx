import React, {useEffect, useState} from 'react'
import './index.less'

function MarkdownEditor(props) {
  const {onUploadImg} = props

  const onEditorKeyDown = (e) => {
    if (e.keyCode === 9) {
      e.preventDefault && e.preventDefault();
      const selectionStart = textDom.selectionStart
      const _newVal = textData.slice(0, textDom.selectionStart) + '  ' + textData.slice(textDom.selectionEnd)
      _textChange(_newVal)
      setTextDomSelectionPosition(selectionStart + 2)
    } else {
      setTextDomSelectionPosition(0)
    }
  }

  const onEditorPaste = async (e) => {
    console.log(e)
    if ( !(e.clipboardData && e.clipboardData.items) ) {
      return
    }

    for (let i = 0, len = e.clipboardData.items.length; i < len; i++) {
      const item = e.clipboardData.items[i]
      const selectionStart = textDom.selectionStart
      if (item.kind === "string") {
        item.getAsString(function (str) {
          console.log(str)
        })
      } else if (item.kind === "file") {
        const f= item.getAsFile()
        const url = await onUploadImg(f)
        const insertStr = `![image](${url})`
        const _newVal = textData.slice(0, textDom.selectionStart) + insertStr + textData.slice(textDom.selectionEnd)
        _textChange(_newVal)
        setTextDomSelectionPosition(selectionStart + insertStr.length)
      }
    }
  }

  const _textChange = (value) => {
    const {textChange} = props
    setTextData(value)
    textChange(value)
  }

  const [textData, setTextData] = useState('')
  const [textDom, setTextDom] = useState(null)
  const [textDomSelectionPosition, setTextDomSelectionPosition] = useState(0)

  useEffect(() => {
    console.log(textDomSelectionPosition);
    if (textDomSelectionPosition > 0) {
      textDom.setSelectionRange(textDomSelectionPosition, textDomSelectionPosition)
    }
  }, [textDomSelectionPosition])

  return (
    <div className="markdown-editor-container">
      <div className="markdown-editor-padding">
        <textarea ref={input => setTextDom(input)} value={textData} onPaste={(e) => onEditorPaste(e)} onKeyDown={(e) => onEditorKeyDown(e)} onChange={(event) => _textChange(event.target.value)}></textarea>
      </div>
    </div>
  )
}

export default MarkdownEditor
