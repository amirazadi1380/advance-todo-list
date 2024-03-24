import { faAdd, faBook, faDeleteLeft, faEdit, faList, faNetworkWired, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import gsap from 'gsap'
import React, { useContext, useLayoutEffect, useRef, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import {AppContext} from './App'
export default function Create() {
  const {editedText,setEditedText} = useContext(AppContext)
  const comp = useRef(null)

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline()
      t1.fromTo("#header", {
        y: -100, duration: 0.5, opacity: 0.7
      }, { opacity: 1, y: -60, duration: 0.5 })
      t1.fromTo("#input", {
        y: 300, duration: 0.2, opacity: 0
      }, { opacity: 1, y: -20 })
    }, comp)

    return () => ctx.revert()
  }, [])
  const [workInput, setWorkInput] = useState('')
  const [editedIndex,setEditedIndex] = useState()
  const [done, setDone] = useState(false)
  const [works, setWorks] = useState([])
  const [showModal, setShowModal] = useState(false)
  const ref = useRef(null)

  const handleDelete = (selectedIndex) => {
    setWorks(works.filter((work, index) => index != selectedIndex));
    toast('آیتم حذف شد');
  }
  const handleCheck = (selectedIndex) => {
    setWorks(works.map((work, index) => index == selectedIndex ? { ...work, checked: !work.checked } : work))
  }

  const handleEdit = (selectedIndex) => {
    setEditedIndex(selectedIndex)
    setShowModal(true)
  }
  return (
    <div ref={comp} className='w-full h-full flex flex-col relative justify-center space-y-10 items-center'>
      <Toaster />
    { showModal &&  <div className='fixed inset-0 bg-black/80 -top-10 flex justify-center items-center z-50'>
        <div className='w-96 h-52 rounded-lg bg-white flex justify-center items-center flex-col'>
          <form onSubmit={(e)=>{
            e.preventDefault()
            setWorks(works.map((work,index)=>index == editedIndex ? {...work,title:editedText} : work))
            setShowModal(false)
            toast("آیتم تغییر کرد")
            }}>
            <input type="text"  onChange={(e) => setEditedText(e.target.value)} />
            <input type="submit" value='change' className='bg-green-600 w-16 cursor-pointer' />
          </form>
        </div>
      </div>     }     
        <div id='header' className='flex justify-between w-80 items-center'><h2 className='text-4xl'>Add item</h2><FontAwesomeIcon className='text-5xl' icon={faList} /></div>
      <div className={`${works.length > 4 ? 'grid grid-cols-2 place-items-center gap-5' : 'flex flex-col space-y-5'} `}>
        {works ? works.map((work, index) => <div key={index} className={` ${works.length > 4 ? 'w-52 ' : 'w-80'} flex items-center space-x-3`}>
          <input type="checkbox" className='bg-trasnparent w-5 cursor-pointer bg-green-300 hover:bg-trasnparent' defaultChecked={work.checked} onClick={() => handleCheck(index)} />
          <div className={`w-72 bg-abi pl-5  h-10 rounded-md flex items-center cursor-pointer ${work.checked && 'line-through opacity-35'}`}>{work.title}</div>
          <div className='flex space-x-3 text-xl'>
            <FontAwesomeIcon className='cursor-pointer' onClick={() => handleDelete(index)} icon={faTrash} />
            <FontAwesomeIcon className='cursor-pointer' onClick={() => handleEdit(index)} icon={faEdit} />
          </div>
        </div>) : <h1>nothing yet...</h1>}
      </div>
      <form id='input' onSubmit={(e) => {
        e.preventDefault();
        setWorks((prev) => [...prev, { title: workInput, checked: false }])
        setWorkInput('')
      }}>
        <input type="text" onChange={(e) => setWorkInput(e.target.value)} value={workInput} className='w-64 bg-black/50 h-10 rounded-md' />
        <input type="submit" value="Add" className='bg-blue-600 p-2 ml-2 rounded-xl w-20 cursor-pointer' />
      </form>
    </div>
  )
}
