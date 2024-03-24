import React, { useContext, useState } from 'react'
import { AppContext } from './App'

export default function Login({user}) {
  const {setUsersname,setOpenList,setOpenUser} = useContext(AppContext)
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const [loggedIn,setLoggedIn] = useState(false)
  const handleForm = (e)=>{
    e.preventDefault();
    if(username == user.username && password == user.password){
      setLoggedIn(true)
      setOpenList(true)
      setOpenUser(false)
      setUsersname(user.username)
    }
    else{
      setLoggedIn(false)
    }
  }
  return (
    <div className='w-full h-[500px]  justify-center flex items-center'>
        <div className='w-96 h-96 bg-white rounded-lg text-black'>
      {loggedIn ? <p className='absolute top-2 left-1/2 -ml-16 font-bold text-green-400'>you logged in succesfully {user.username}</p> : <p className='absolute top-2 left-1/2 ml-10 font-bold text-red-600'>login first</p>}
        <form onSubmit={(e)=>handleForm(e)} className='flex flex-col w-full justify-center items-center h-full '>
            <label>username:</label>
            <input type="text" onChange={(e)=>setUsername(e.target.value)} value={username} required/>
            <label>password:</label>
            <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} required/>
            <input type="submit" value='login' className='bg-black mt-10 h-10 hover:bg-red-600/80 hover:text-black cursor-pointer  shadow-2xl duration-150 ease-in shadow-stone-900 hover:border'/>
          </form>
        </div>
    </div>  )
}
