import React, {useEffect, useState} from 'react'
import './index.less'

function NoteCard(props) {
  const {noteInfo} = props

  return (
    <div className="note-list-card-main">
      <div className="cover-img">
        {
          noteInfo.cover
            ? (<img src={noteInfo.cover} width="100%" height="100%" alt=""/>)
            : (noteInfo.title)
        }
      </div>
    </div>
  )
}

export default NoteCard
