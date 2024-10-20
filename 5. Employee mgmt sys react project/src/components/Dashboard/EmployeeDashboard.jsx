import React from 'react'
import Header from '../Others/Header'
import TaskListNumbers from '../Others/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  //console.log(data);
  
  return (
    <div className='p-10 bg-[#icicic] h-screen'>
      
        <Header changeUser={props.changeUser} data={props.data}/>
        {/* this data is coming from app.jsx  */}
        <TaskListNumbers data={props.data}/>
        <TaskList data={props.data}/>
    </div>
  )
}

export default EmployeeDashboard
