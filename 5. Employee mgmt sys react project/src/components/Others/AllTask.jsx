import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = (e) => {
    const authData = useContext(AuthContext)
    console.log(authData.employees);
    
  return (
    <div className='bg-[#1c1c1c] p-5 rounded mt-5'>
        <div className='bg-emerald-600 mb-2 py-2 px-4 flex justify-between rounded text-xl'>
            <h2 className='w-1/5 bg-black text-center font-bold rounded text-xl'>Employee Name</h2>
            <h3 className='w-1/5 bg-black text-center font-bold rounded text-xl'>New Tasks</h3>
            <h5 className='w-1/5 bg-black text-center font-bold rounded text-xl'>Active Tasks</h5>
            <h5 className='w-1/5 bg-black text-center font-bold rounded text-xl'>Completed</h5>
            <h5 className='w-1/5 bg-black text-center font-bold rounded text-xl'>Failed</h5>
        </div>

        <div className='h-[80%]'>
        {authData.employees.map((e)=>{
            return <div className='bg-black mb-2 py-2 px-4 flex justify-between rounded'>
            <h2  className='w-1/5 bg-black text-center rounded-xl text-lg'>{e.name}</h2>
            <h3  className='w-1/5 bg-blue-600 text-center rounded-xl text-lg'>{e.taskCounts.newTask}</h3>
            <h5  className='w-1/5 bg-yellow-600 text-center rounded-xl text-lg'>{e.taskCounts.active}</h5>
            <h5  className='w-1/5 bg-green-600 text-center rounded-xl text-lg'>{e.taskCounts.completed}</h5>
            <h5  className='w-1/5 bg-red-600 text-center rounded-xl text-lg'>{e.taskCounts.failed}</h5>
        </div>
        })}
        </div>
    </div>
  )
}

export default AllTask