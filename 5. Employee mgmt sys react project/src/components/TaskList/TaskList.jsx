import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
    console.log(data);
    
  return (
    <div id='taskList' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap py-5 w-full mt-10'>
        {data.tasks.map((e, idx)=>{
            if(e.active){
                return <AcceptTask key={idx} data={e} />
            }
            if(e.NewTask){
                return <NewTask key={idx} data={e}/>
            }
            if(e.completed){
                return <CompleteTask key={idx} data={e}/>
            }
            if(e.failed){
                return <FailedTask key={idx} data={e}/>
            }
        })}
    </div>
  )
}

export default TaskList