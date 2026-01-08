import React from 'react'
import { useContext } from 'react'
import { LoginContext } from '../contexts/LoginContext'
//import { useState } from 'react'
function Login() {
    const {setName,setProfileInfo}=useContext(LoginContext)
    // const [name, setName]=useState("")
    // const [pwd, setPwd]=useState("")
    // const [profileinfo, setProfileInfo]=useState(false)
    //  const show=()=>{
    //     if(name==="Ragav" && pwd==="Ragav@3143")
    //         setProfileInfo(true)
    //     else
    //         setProfileInfo(false)
    // }
  return (
    <div>
      <input type='text'onChange={(e)=>setName(e.target.value)} placeholder='Enter UserName'></input>
      <br></br>
      <input type='password' placeholder='Enter PassWord'></input>
      <br></br>
      <input type='button' onClick={()=>setProfileInfo(true)} value='Login'></input>
      <br></br>
       {/*  {(profileinfo && "Valid User : " + name + "!") || "Invalid"} */}
    </div>
  )
}

export default Login
