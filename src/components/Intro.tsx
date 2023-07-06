import React from 'react'

const Intro : React.FC = () => {
  return (
    <section
    id='intro'
    className='flex items-center justify-center flex-col pt-20 pb-6'>
      <div className='text-center'>
        <h1 className='text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold'> {`<div>`} </h1>
        <p className='text-base md:text-xl mb-3 font-medium'> Software Engineer and Web Developer</p>
      </div>
    </section>
  )
}

export default Intro