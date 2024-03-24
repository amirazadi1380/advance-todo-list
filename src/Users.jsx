import React from 'react'

export default function Users({allUsers}) {
  return (
    <div className='absolute top-4 text-[5px] flex space-x-3'>
        {allUsers.filter((user,index)=>index != 0).map((user,index)=><h1 key={index}>{user.username}</h1>)}
    </div>
  )
}
