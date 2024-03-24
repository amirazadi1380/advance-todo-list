import React, { useContext, useState } from 'react'
import Users from './Users'
import Login from './Login'
import { AppContext } from './App'

export default function Signup() {
  const {user,setUser} = useContext(AppContext)
  const [signedIn,setSignedIn] = useState(false)
  const [err,setErr] = useState(false)
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const [confirmPassword,setConfirmPassword] = useState('')
  const [email,setemail] = useState('')
  const [allUsers,setAllUsers] = useState([])
  const handleForm = (e) =>{
    e.preventDefault();
    if (username.length >= 8 && password == confirmPassword){
      setUser({
        username:username,
        password:password,
        email:email
      })
      setErr(false)
      setAllUsers([...allUsers,user]);
      setUsername('');
      setPassword('');
      setConfirmPassword('');
      setemail('');
      setSignedIn(true)
    }
    else{
      setErr(true)
      setAllUsers([...allUsers,user]);
      setUsername('');
      setPassword('');
      setConfirmPassword('');
      setemail('');
    }
  }
  return (
    <div className='w-full h-[500px]  justify-center flex items-center'>
      <button onClick={()=>setSignedIn(!signedIn)} className='absolute bottom-2 bg-transparent text-blue-500'>{signedIn ? "sign up" : "log in"}</button>
      <Users allUsers={allUsers}/>
        { signedIn ?  <Login signedIn={signedIn} user={user}/>: <div className='w-96 h-96 bg-white rounded-lg text-black'>
          {err && <p className='text-red-600 text-center font-bold'>دوباره تلاش کنید</p>}
          <form onSubmit={(e)=>handleForm(e)} className='flex flex-col w-full justify-center items-center h-full '>
            <label>username:</label>
            <input type="text" onChange={(e)=>setUsername(e.target.value)} value={username} required/>
            <label>password:</label>
            <input type="password" onChange={(e)=>setPassword(e.target.value)} value={password} required/>
            <label>confirm password:</label>
            <input type="password" onChange={(e)=>setConfirmPassword(e.target.value)} value={confirmPassword} required/>
            <label>email(optional)</label>
            <input type="email" onChange={(e)=>setemail(e.target.value)} value={email} />
            <input type="submit" value='sign up' className='bg-black mt-10 h-10 hover:bg-red-600/80 hover:text-black cursor-pointer  shadow-2xl duration-150 ease-in shadow-stone-900 hover:border'/>
          </form>
        </div> }
    </div>
  )
}
