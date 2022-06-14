import React from 'react'

const WorkItem = ({imgUrl, title, tech}) => {
  return (
    <div>
      <img src={imgUrl} alt={title} className='w-full 
      h-36 md:h-48 object-cover' />
      <div className='text-gray-600 dark:text-gray-300 p-5 w-full'>
        <h3 className='text-lg md:text-xl mb-2 md:mb-3 font-semibold '>{title}</h3>
        <p>
          {tech.map(item => (
            <span key={item}
              className='inline-block px-2 py-1
              bg-slate-200 dark:bg-slate-900'
            >
              {item}
            </span>
          ))}
        </p>
      </div>
    </div>
  )
}

export default WorkItem