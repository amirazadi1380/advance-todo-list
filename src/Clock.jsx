import React, { useEffect } from 'react'

export default function Clock() {
    let date = new Date()
    let day = date.getDay()
    let month =  date.getUTCDate();
    let year = date.getFullYear()
  return (
    <div className='absolute bottom-2 right-2 font-poppins text-xs'>
        {day + 3}/{month}/{year}
    </div>
  )
}
