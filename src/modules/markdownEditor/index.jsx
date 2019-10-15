import React, {useEffect, useState} from 'react'
import './index.less'

function MarkdownEditor(props) {

  const onEditorKeyDown = (e) => {
    if (e.keyCode === 9) {
      e.preventDefault && e.preventDefault();
      const _newVal = textData.slice(0, textDom.selectionStart) + '  ' + textData.slice(textDom.selectionEnd)
      setTextDomSelectionPosition(textDom.selectionStart + 2)
      _textChange(_newVal)
    } else {
      setTextDomSelectionPosition(0)
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
  })

  return (
    <div className="markdown-editor-container">
      <div className="markdown-editor-padding">
        <textarea ref={input => setTextDom(input)} value={textData} onKeyDown={(e) => onEditorKeyDown(e)} onChange={(event) => _textChange(event.target.value)}></textarea>
      </div>
    </div>
  )
}

export default MarkdownEditor
