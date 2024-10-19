import React from 'react'

const TaskListNumbers = () => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
        <div className='rounded-xl w-[45%] px-5 py-10 bg-red-400'>
            <h2 className='text-2xl fomt-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='rounded-xl w-[45%] px-5 py-10 bg-blue-400'>
            <h2 className='text-2xl fomt-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='rounded-xl w-[45%] px-5 py-10 bg-green-400'>
            <h2 className='text-2xl fomt-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='rounded-xl w-[45%] px-5 py-10 bg-yellow-400'>
            <h2 className='text-2xl fomt-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>

    </div>
  )
}

export default TaskListNumbers