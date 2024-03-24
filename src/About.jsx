import gsap from 'gsap'
import React, { useLayoutEffect, useRef } from 'react'

export default function About() {
  const comp = useRef(null)

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline()
      t1.fromTo("#pp", {
         duration: 1.5, opacity: 0
      }, { opacity: 1,delay:0.3, duration: 1.5 })
      t1.fromTo("#social", {
        y: 300, duration: 0.2, opacity: 0
      }, { opacity: 1, y: 50,duration:0.2 })
    }, comp)

    return () => ctx.revert()
  }, [])
  return (
    <div ref={comp} className='w-full h-full justify-center items-center flex flex-col overflow-hidden'>
      <h1>TODO-LIST</h1>
      <p id='pp' className='p-3 text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab deleniti numquam minima nesciunt officia voluptatem totam quod, nisi, soluta dolorem dignissimos necessitatibus maiores nemo ipsum. Eaque facilis at saepe voluptas!
        Accusantium velit maiores quo molestias optio! Consectetur tenetur eaque ea nesciunt fugit. Iusto beatae natus inventore voluptates, voluptatibus odit recusandae, illum placeat, ab delectus minus suscipit quod. Ad, dolor quisquam.
        Dignissimos cumque vel adipisci deserunt nostrum reiciendis veniam inventore accusantium aut aliquid quas facilis perspiciatis eveniet, </p>
      <div id='social' className='flex space-x-5 w-full justify-center mt-10'>
        <img src='instagram.png' alt="sda" className='w-8 h-8 cursor-pointer' />
        <img src='telegram.png' alt="sda" className='w-8 h-8 cursor-pointer' />
        <img src='whatsapp.png' alt="sda" className='w-8 h-8 cursor-pointer' />
      </div>
    </div>
  )
}
