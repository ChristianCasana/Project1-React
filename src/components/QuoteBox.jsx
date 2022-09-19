import React from 'react'
import Button from './Button'

const QuoteBox = ({randomQuote, randomColor, getRandomALL}) => {
    
    const colorObj = {
        color: randomColor
    }

  return (
    <article style={colorObj} className='card'>
        <p className='card-quote'>{randomQuote.quote} </p>
        <h1 className='card-author'>{randomQuote.author}</h1>
        <Button
          randomColor={randomColor}
          getRandomALL={getRandomALL}
        />
    </article>
  )
}
export default QuoteBox