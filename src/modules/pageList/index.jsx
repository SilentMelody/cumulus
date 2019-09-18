import React from 'react'
import PropTypes from 'prop-types'

class Counter extends React.Component {
  render() {
    const {listActive, onMouseLeaveList, onPageSelect} = this.props
    const pageList = [
      {position: 'left', content: '笔记', bgColor: '#ff5129'},
      {position: 'left', content: 'To-Do', bgColor: '#ff762f'},
      {position: 'left', content: '收藏', bgColor: '#ffff22'},
      {position: 'left', content: '留言板', bgColor: '#a7ff22'},
      {position: 'right', content: '个人信息', bgColor: '#2bf7ce'},
      {position: 'right', content: '', bgColor: '#2ba5f7'},
      {position: 'right', content: '', bgColor: '#B822DD'},
      {position: 'right', content: '', bgColor: '#E61AE6'}
      ]
    return (
      <div className={listActive ? "list-circle active" : "list-circle"} onMouseLeave={() => onMouseLeaveList()}>
        {
          pageList.map((item, index) => {
            return (
              <div key={index} className={"list-item" + ' ' + item.position} onClick={() => onPageSelect(item.content)}>
                <div className="item-content" style={{backgroundColor: item.bgColor}}></div>
                <div className="item-text">{item.content}</div>
              </div>
            )
          })
        }
      </div>
    )

  }
}

Counter.propTypes = {
  listActive: PropTypes.bool.isRequired,
  onMouseLeaveList: PropTypes.func.isRequired,
  onPageSelect: PropTypes.func.isRequired
}

export default Counter
