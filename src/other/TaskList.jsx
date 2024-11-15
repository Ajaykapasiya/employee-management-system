import React from 'react'

const TaskList = () => {
    console.log('TaskList is rendering');
  return (
    <div className='flex  mt-10 justify-between gap-5 screen '>
      <div className='h-40 w-[45%] bg-red-400 '>
        <h2 className='text-2xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>

    </div>
  )

}

export default TaskList
