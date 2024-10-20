import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = () => {
  // console.log(data);
  // const [username, setusername] = useState("")

  // if(!data){
  //   setusername('Admin')
  // }else{
  //   setusername(data.name)
  // }


  const logOutUser = () => {
    localStorage.setItem('loggedInUser','')
    window.location.reload()
  }


  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello, <br /><span className='text-3xl font-semibold'>username👋</span></h1>
        <button onClick={logOutUser} className='bg-red-500 text-white px-5 py-2 rounded-sm text-lg font-medium'>Logout</button>
    </div>
  )
}

export default Header