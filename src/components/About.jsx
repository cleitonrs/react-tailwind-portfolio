import React from 'react'
import SectionTitle from './SectionTitle'

const About = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-20'>
      <div className='w-full md:w-6/12'>
        <SectionTitle>About Me</SectionTitle>
        <p className='text-md text-gray-600 dark:text-gray-300'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga odit, ut vitae laborum aut doloremque ipsa excepturi, nemo officiis placeat expedita numquam. Porro consequatur neque assumenda, voluptatibus quaerat fuga? Quo.
        </p>
        <a href="mailto:rscleitonrs@gmail.com"
          className='block mt-3 text-md md:text-lg font-regular text-gray-700 dark:text-gray-300 underline hover:text-indigo-500 dark:hover:text-indigo-500'
        >rscleitonrs@gmail.com</a>
      </div>
      
      <img src={`https://avatars.githubusercontent.com/u/62728037?v=4`} alt='Cleiton Santos' className='w-full md:w-6/12 rounded-lg object-cover'/>
    </div>
  )
}

export default About