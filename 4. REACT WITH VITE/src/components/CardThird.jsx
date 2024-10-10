import React from 'react'

const  Card = (Props) => {
    // console.log(Props);
    
  return (
    <>
        <div className='bg-white text-black p-6 text-center inline-block rounded-2xl'>
            <h1>{Props.user} {Props.lastname}</h1>
            <h1>{Props.city}, {Props.age}</h1>
            <button>Add Friend</button>
        </div>
    </>
  )
}

export default Card