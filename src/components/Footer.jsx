import React from 'react'

const Footer = () => {
  return (
    <div className='py-5 bg-slate-800 text-center text-gray-300 rounded-t-lg'>
      <a href="#hero" className='block text-xl md:text-2xl font-semibold'>Cleiton Santos</a>
      <a href="mailto:rscleitonrs@gmail.com"
        className=' text-sm md:text-md hover:text-violet-500'
      >rscleitonrs@gmail.com</a>
      <p className='text-xs mt-2 text-gray-500'>
        &copy; Cleiton Santos Developer {new Date().getFullYear()}. All rights reserved
      </p>
    </div>
  )
}

export default Footer