import React from 'react'

const AcceptTask = ({data}) => {
  console.log(data);
  
  return (
    <div className="flex-shrink-0 h-full w-[310px] p-5  bg-red-400 rounded-xl ml-6">
    <div className="flex justify-between items-center">
      <h3 className=" bg-red-600 px-3 py-1 text-sm rounded">{data.category}</h3>
      <h4 className=" text-base font-mono ">20 feb 2024</h4>
    </div>
    <h2 className="mt-5 text-xl font-semibold">{data.taskTitle}</h2>
    <p className="text-sm mt-2">
    {data.taskDescription}
    </p>
    <div className='flex justify-between mt-4'>
        <button className='bg-green-400 py-1 px-2 text-sm'>Mark as Complete</button>
        <button className='bg-red-600 py-1 px-2 text-sm'>Mark as Failed</button>
    </div> 
  </div>
  )
}

export default AcceptTask