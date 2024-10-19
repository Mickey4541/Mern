import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {

//useeffect ley sidestack maa function chalauni kaam
useEffect(() => {
  // setLocalStorage()
  getLocalStorage()
},)

const [user, setUser] = useState(null)
const [loggedInUserData, setLoggedInUserData] = useState(null)
const authData = useContext(AuthContext)
//console.log(authData.employees);


//user logged in xa yaa admin logged in xa tyo patta launa ko lagi localstorage maa.
useEffect(() => {
  if(authData){
    const loggedInUser = localStorage.getItem("LoggedInUser")
    if(loggedInUser){
      setUser(loggedInUser.role)
    }
  }
}, [authData])


//handle login checks if the email and password matched or not.
const handleLogin = (email,password) => {
  // console.log(email,password);
  if(email == 'admin@name.com' && password == '123'){
    // console.log("This is admin dashboard.");
    setUser('admin')
    localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
    
  }else if(authData){
    const employee = authData.employees.find((e)=>email == e.email && password == e.password)
    if(employee){
      setUser('employee')
      setLoggedInUserData(employee)
    }
    localStorage.setItem('loggedInUser', JSON.stringify({role:'employee'}))

    
  }else{
    alert('Invalid Credentials. !!!')
  }
}






  return (
    <>
    {/* if no user, open login if there is user do nothing (khali xod diyo) */}
    {!user ? <Login handleLogin = {handleLogin}/> : ""}
    {user == 'admin' ? <AdminDashboard/> : <EmployeeDashboard data = {loggedInUserData}/>}
    {/* <EmployeeDashboard/> */}
    {/* <AdminDashboard/> */}
    </>
  )
}

export default App