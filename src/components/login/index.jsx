import React, { useState } from 'react'

function Login(props) {
  const [userName, setUserName] = useState('')
  const [userPassword, setUserPassword] = useState('')

  const login = () => {
    const {onLogin} = props
    const userInfo = {
      u_name: userName,
      u_pwd: userPassword
    }
    onLogin(userInfo, loginCallback)
  }

  const loginCallback = () => {
    const {history} = props
    history.push('/home')
  }

  return (
    <div>
      <div>
        <input value={userName} onChange={(event) => setUserName(event.target.value)} type="text"/>
      </div>
      <div>
        <input value={userPassword} onChange={(event) => setUserPassword(event.target.value)} type="password"/>
      </div>
      <div>
        <button onClick={login}>登录</button>
      </div>
    </div>
  )
}

export default Login
