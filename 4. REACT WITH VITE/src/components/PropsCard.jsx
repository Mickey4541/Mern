import React from 'react'

const PropsCard = (props) => {
  return (
    <div>
        <h1 className='text-3xl'>This is a Card for learning props and props drilling by {props.user}.</h1>
    </div>
  )
}

export default PropsCard