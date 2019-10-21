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
  return (
    <div className="home-container">
      <PageList history={props.history}></PageList>
      <div className="cloud-box">
        <div className="text"> Cumulus
          <span>积云，积少成多</span>
        </div>
      </div>
      <div className="sign">
        @李志豪
      </div>
    </div>
  )
}

export default Home
