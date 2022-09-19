import React from 'react'

const Button = ({randomColor, getRandomALL}) => {

  const backgroundObj ={
    backgroundColor: randomColor
  }

  return (
    <button 
    className='card-button' 
    style={backgroundObj}
    onClick={getRandomALL}
    >&#62;</button>
  )
}

export default Button