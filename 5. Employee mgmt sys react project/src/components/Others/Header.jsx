import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = (props) => {
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
    // console.log(props.changeUser);
    props.changeUser('') //change user empty vayepaxi app.jsx bhitra !user wala condition chalxa ani form aauxa ui maa.(means !user vayo vani login render hunxa)
  }


  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello, <br /><span className='text-3xl font-semibold'>username👋</span></h1>
        <button onClick={logOutUser} className='bg-red-500 text-white px-5 py-2 rounded-sm text-lg font-medium'>Logout</button>
    </div>
  )
}

export default Header