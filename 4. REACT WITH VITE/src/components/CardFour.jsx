import React from 'react'

const CardFour = (Props) => {
    console.log(Props.profession);
    
  return (
    <div className='mr-14 bg-white text-black inline-block p-6 text-center rounded-3xl'>
        <img className='h-32 w-32 rounded-full mb-5 ml-7 mr-8' src={Props.photo} alt="" />
        <h1 className='text-2xl font-semibold mb-4'>{Props.username} {Props.lastname}</h1>
        <h2>{Props.age}, {Props.city}</h2>
        <p className='text-blue-700'>{Props.Profession}</p>
        <button className='mt-4 bg-emerald-700 text-white px-4 py-2 rounded font-medium'>Add Friend</button>
    </div>
  )
}

export default CardFour