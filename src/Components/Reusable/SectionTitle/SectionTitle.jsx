import React from 'react'

const SectionTitle = ({children}) => {
  return (
  <div className="mt-5 relative w-full flex  justify-start py-4 mx-auto px-4">
      <h1 className="text-white text-center text-2xl md:text-4xl font-bold tracking-wide mx-2">
        {children}
      </h1>
    </div>
  )
}

export default SectionTitle
