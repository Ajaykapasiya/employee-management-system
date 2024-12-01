import React from 'react'

function Header() {
  return (
    <div className='flex items-end justify-between '>
      <h1 className='text-2xl px-8 py-3 font-medium'>Hello <br /> <span className='text-3xl font-semibold'>Ajay</span> 👋🏻</h1>
      <button className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-lg'>Log out</button>
    </div>
  )
}

export default Header
