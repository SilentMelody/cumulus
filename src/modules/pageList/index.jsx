import React from 'react'
import PropTypes from 'prop-types'
import './index.less'
// import {Icon} from 'antd'

function MenuList(props) {
  const pageList = [
    {content: '笔记', bgColor: '#ff5129'},
    {content: 'To-Do', bgColor: '#ff762f'},
    {content: '收藏', bgColor: '#ffff22'},
    {content: '留言板', bgColor: '#a7ff22'},
    {content: '个人信息', bgColor: '#2bf7ce'},
    {content: '', bgColor: '#2ba5f7'},
    {content: '', bgColor: '#B822DD'},
    {content: '', bgColor: '#E61AE6'}
    ]
  const goPageSelect = (selected) => {
    const {history} = props
    history.push('/' + selected)
  }
  return (
    <div className="menu-list">
      {/*<Icon type="home" style={{color: '#fff', float: 'left', marginRight: '10px', cursor: 'pointer'}} onClick={() => goPageSelect('')} />*/}
      {
        pageList.map((item, index) => {
          return (
            <div key={index} className={"list-item"} onClick={() => goPageSelect(item.content)} style={{borderLeft: '1px solid ' + item.bgColor}}>
              <div className="item-content">{item.content}</div>
            </div>
          )
        })
      }
    </div>
  )
}

export default MenuList
