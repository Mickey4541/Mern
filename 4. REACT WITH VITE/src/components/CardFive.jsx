import React from 'react'
import CardFive1 from './CardFive1'

const CardFive = (props) => {
  return (
    <>
    <div>From {props.name}</div>
    <CardFive1 user = {props.name}/>
    </>
  )
    
}

export default CardFive