import React from 'react'

const SectionTitle = ({children, id}) => {
  return (
    <h1 id={id && id}
    className="text-3xl font-bold mb-5 text-violet-600 dark:text-violet-500"
    >
      {children}
    </h1>
  )
}

export default SectionTitle