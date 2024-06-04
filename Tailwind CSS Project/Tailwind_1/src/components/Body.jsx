import React from 'react'

const Body = () => {
  return (
    <div className='space-y-4 lg:flex'>
      <div className='flex items-center justify-center lg:flex-1 lg:order-2 lg:justify-end'>
    <img src="./assets/Blue-Shape.svg" alt="1st" className='-rotate-45 h-72 md:h-96 lg:h-[400px]'/>
    <img src="./assets/Pink-Shape.svg" alt="2nd" className='absolute -rotate-[30deg] h-72 md:h-96 lg:h-[400px]'/>
    <img src="./assets/Purple-Shape.svg" alt="3rd" className='absolute -rotate-[15deg] h-72 md:h-96 lg:h-[400px]'/>
    <img src="./assets/Hero-Model.png" alt="hero" className='absolute h-72 md:h-96 lg:h-[400px]'/>

      </div>
      <div className='lg:flex-1 lg:order-1'>
    <h1 className='text-5xl font-bold font-playfair leading-tight md:text-6xl'>Host your website in less than 5 minutes</h1>
    <p className='font-lato text-gray-500 py-3 md:text-lg md:py-4'>With Hoster , get your website up and running in no less than 5 minutes with the most competitive pricing packages available online.</p>
      <form action="" className='flex flex-col gap-4 py-3 md:flex-row '>
        <input className='px-4 py-3 rounded-md placeholder: text-gray-400' type="email" placeholder='Enter e-mail address' />
        <button className='rounded-md px-4 py-3 bg-blue-500 text-white hover:bg-blue-700'>Join Waitlist</button>
      </form>
      <div className='flex gap-2 py-3 md:gap-4'>
        <img src="./assets/Checkmark.svg" alt="check" />
        <p className='font-lato text-gray-500 md:text-base'>No spam, ever. Unsubscribe anytime.</p>
      </div>
      </div>
    </div>
  )
}

export default Body