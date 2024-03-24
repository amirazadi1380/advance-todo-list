import React, { useState } from 'react'
import Login from './Login'
import Signup from './Signup'

export default function User() {
    const [loggedIn,setLoggedIn] = useState(false)
  return (
    <div>
        {loggedIn ? <Login/> : <Signup/>}
    </div>
  )
}
