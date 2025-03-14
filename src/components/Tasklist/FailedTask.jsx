import React from 'react'

const FailedTask = () => {
  return (
    <div className="flex-shrink-0 h-full w-[310px] p-5  bg-purple-600 rounded-xl ml-6">
    <div className="flex justify-between items-center">
      <h3 className=" bg-red-600 px-3 py-1 text-sm rounded">High</h3>
      <h4 className=" text-base font-mono ">20 feb 2024</h4>
    </div>
    <h2 className="mt-5 text-xl font-semibold">Make a youtube video</h2>
    <p className="text-sm mt-2">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, sequi.
      Optio provident asperiores quod aut!
    </p>
    <div className='mt-2'>
        <button className='w-full'>Failed</button>
    </div> 
  </div>

  )
}

export default FailedTask