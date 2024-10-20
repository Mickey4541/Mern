import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {

// //useeffect ley sidestack maa function chalauni kaam
// useEffect(() => {
//   // setLocalStorage()
//   getLocalStorage()
// },)

const [user, setUser] = useState(null)
const [loggedInUserData, setLoggedInUserData] = useState(null)
const authData = useContext(AuthContext)
//console.log(authData.employees);


//user logged in xa yaa admin logged in xa tyo patta launa ko lagi localstorage maa.
useEffect(() => {
  
    const loggedInUser = localStorage.getItem("loggedInUser")

    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      //console.log("User is logged in.");
      setUser(userData.role)
      setLoggedInUserData(userData.data);
  }
}, [])//// Empty dependency array ensures this runs only once on component mount


//handle login checks if the email and password matched or not.
const handleLogin = (email,password) => {
  // console.log(email,password);
  if(email == 'admin@example.com' && password == '123'){
    // console.log("This is admin dashboard.");
    setUser('admin')
    localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
    
  }else if(authData){
    const employee = authData.employees.find((e)=>email == e.email && password == e.password)
    if(employee){
      setUser('employee')
      setLoggedInUserData(employee)
    
    localStorage.setItem('loggedInUser', JSON.stringify({role:'employee', data:employee}))

    
  }else{
    alert('Invalid Credentials. !!!')
  }
}else{
  alert("Invalid Credentials.")
}
}






  return (
    <>
    {/* if no user, open login if there is user do nothing (khali xod diyo) */}
    {!user ? <Login handleLogin = {handleLogin} /> : null}
    {/* yaha nera changeUser={setUser} ko kaam vaneko logout gardaa page load na hos vanera ho, yaha bata admin dashboard maa pass gareko xa ra admin dashboard maa props bata receive gareko xa ani reslai tei header maa pani changeUser pass gareko xa, employeedashboard maa pani changeuser props bata receive gareko xa. ani employeedashboard bhitra header, tasklist ra tasklistnumber maa props.data vanera pass gareko xa. ani last maa header maa props bata receive gareko xa. header maa props.changeuser('') yesari empty string lekhako xa, tyo empty string ley yaha mathi ko ko !user call hunxa ra login form ui maa aauxa*/}
    {user === 'admin' ? <AdminDashboard changeUser={setUser}/> : user === "employee" ? <EmployeeDashboard changeUser={setUser} data = {loggedInUserData}/> :null}
    {/* This code checks the value of the user variable. If it's "admin", it displays the AdminDashboard component; if it's "employee", it displays the EmployeeDashboard component and passes loggedInUserData to it. If neither condition is met, it returns nothing (null). */}


    {/* <EmployeeDashboard/> */}
    {/* <AdminDashboard/> */}
    </>
  )
}

export default App