import React, {useEffect} from 'react'
import _showdown from 'showdown'
import showdownHighlight from 'showdown-highlight'
import './index.less'
// import './lostkeys/lostkeys.css'
function MarkdownPreview(props) {
  const {text} = props

  const converter = new _showdown.Converter(
    {extensions: [showdownHighlight]}
  )
  const html = converter.makeHtml(text);

  useEffect(() => {
    console.log('useEffect......');
  })

  return (
    <div className="markdown-preview-container markdown-body" dangerouslySetInnerHTML={{__html: html}}></div>
  )
}

export default MarkdownPreview
