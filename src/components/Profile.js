import React from 'react'
import { useContext } from 'react'
import { LoginContext } from '../contexts/LoginContext'
function Profile() {
    const{ name }=useContext(LoginContext)
  return (
    <div>
      <h2>This is Profile Page</h2>
      <h1>Welcome!! {name}</h1>
      <h1>Ungal Thevai Engal Sevai</h1>
    </div>
  )
}

export default Profile
