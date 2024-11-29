import React from 'react'

const TaskList = () => {
  console.log("TaskList component is rendering");
  return (

    <div className=' h-[55%] flex  w-full py-5 bg-red-500 mt-10 rounded-xl' >
          <div className= 'h-full w-[300px]  bg-yellow-300 rounded-xl ml-7'  >
          </div>

          <div className= 'h-full w-[300px]  bg-purple-300 rounded-xl ml-7'  >
          </div>

          <div className= 'h-full w-[300px]  bg-blue-300 rounded-xl ml-7'  >
          </div>

          <div className= 'h-full w-[300px]  bg-pink-300 rounded-xl ml-7'  >
          </div>

    </div>
  )
}

export default TaskList
