import { faHome, faNetworkWired, faPen, faPenClip, faPencil, faPersonCircleQuestion, faQuestion, faQuestionCircle, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { createContext, useState } from 'react'
import Create from './Create';
import About from './About';
import User from './User';
import Clock from './Clock';

export const AppContext = createContext();

function App() {
  const [openList, setOpenList] = useState(true);
  const [openUser, setOpenUser] = useState(false);
  const [openAbout, setOpenAbout] = useState(false);
  const [usersname,setUsersname] = useState('')
  const [editedText,setEditedText] = useState('')
  const [user,setUser] = useState({})
  return (
    <AppContext.Provider value={{setUsersname,setOpenList,setOpenUser,user,setUser,editedText,setEditedText}}>

      <div className='w-screen h-screen bg-back flex justify-center items-center font-serif text-white' >
        <div className='w-[600px] h-[500px] md:w-[800px] md:h-[500px] rounded-xl bg-golbe shadow-xl flex relative'>
          <div className='absolute left-5 top-3 flex justify-between w-[130px]  items-center'>
            <h1 className='text-lg'>TODO</h1>
            <FontAwesomeIcon icon={faPen} />
          </div>
          <div className='absolute top-2 left-1/2'>
          {usersname ? <h1 className='text-lg text-green-400'>{user.username}</h1> : <button className={`absolute ml-5 hover:text-white top-2 left text-xs w-20 left-1/2 cursor-pointer z-50 bg-transparent text-blue-500 ${openUser && 'hidden'}`} onClick={()=>{
            setOpenList(false)
            setOpenUser(true)
          }}>sign in</button>}
          </div>
          <div className='w-[180px] ml-5 space-y-2 bg-golbe   shadow-2xl mt-16 rounded-lg h-96'>
            <div className={`w-full flex justify-between items-center px-3 text-base h-10 cursor-pointer  ${openList ? 'rounded-r-full bg-abi' : 'bg-black/50'} `} onClick={() => {
              setOpenUser(false)
              setOpenList(true)
              setOpenAbout(false)
            }}>
              <span>Create List</span>
              <FontAwesomeIcon icon={faHome} />
            </div>
            <div className={`w-full   flex justify-between items-center px-3 text-base h-10 cursor-pointer ${openUser ? 'rounded-r-full bg-abi' : 'bg-black/50'}`} onClick={() => {
              setOpenUser(true)
              setOpenList(false)
              setOpenAbout(false)
            }}>
              <span>Sign up</span>
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div className={`w-full flex justify-between items-center px-3 text-base h-10 cursor-pointer ${openAbout ? 'rounded-r-full bg-abi' : 'bg-black/50'}`} onClick={() => {
              setOpenUser(false)
              setOpenList(false)
              setOpenAbout(true)
            }}>
              <span>About</span>
              <FontAwesomeIcon icon={faPersonCircleQuestion} />
            </div>
            {user.username && usersname ? <button onClick={()=>{
              setUser({})
              setUsersname('')
              }} className='w-full flex justify-between items-center px-3 text-base h-10 cursor-pointer bg-red-600'>log out</button> : <p></p>}
          </div>
          <div className='w-full bg-black/30 rounded-xl ml-3'>
            {openList && <Create />}
            {openAbout && <About />}
            {openUser && <User />}
          </div>

        <Clock/>
        </div>
      </div>
    </AppContext.Provider>
  )
}

export default App
