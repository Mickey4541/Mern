import React from 'react'

const NewTask = () => {
  return (
    <div className=' flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 text-sm py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.date}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
            <p className='text-sm mt-5'>
                {data.description}
            </p>
            <div className='mt-4'>
                <button className='bg-green-500 py-1 px-2 rounded text-sm'>Accept Task</button>
            </div>
        </div>
  )
}

export default NewTask