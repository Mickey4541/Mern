//inside main.jsx wrap the <App/> with <AuthProvider></AuthProvider>.

import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'



export const AuthContext = createContext()


const AuthProvider = ({children}) => {

  const [userData, setUserData] = useState(null)
  //setUserData( getLocalStorage())

  useEffect(() => {
    setLocalStorage()
    const {employees, admin} = getLocalStorage()
    setUserData({employees,admin})
  },[])
  

  return (
    <div>
        {/*  children pass gareko kinaki main.jsx bhitra app lai AuthProvider ley wrap gareko xa. */}
        <AuthContext.Provider value={userData}>
        {children}
        </AuthContext.Provider>
        
    </div>
  )
}

export default AuthProvider





