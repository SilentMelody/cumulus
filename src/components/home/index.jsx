import React, { useState } from 'react'
import '../../style/less/home.less'
import PageList from "../../modules/pageList/index.jsx"

function Home(props) {
  const [listActive, setListActive] = useState(false)
  const showList = () => {
    setListActive(true)
  }
  const hideList = () => {
    setListActive(false)
  }
  const goPageSelect = (selected) => {
    const {history} = props
    history.push('/' + selected)
  }
  return (
    <div className="home-container">
      <div className={listActive ? "cloud-box active" : "cloud-box"} onMouseEnter={() => showList()}>
        <div className="text">Cumulus</div>
      </div>
      <PageList listActive={listActive} onMouseLeaveList={() => hideList()} onPageSelect={(selected) => goPageSelect(selected)}></PageList>
      <div className="sign">
        @李志豪
      </div>
    </div>
  )
}

export default Home
