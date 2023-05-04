import React from 'react'
import './styles/hasError.css'

const HasError = () => {
  return (
    <div className='hasError'>
        <i className="hasError__icon fa-solid fa-triangle-exclamation"></i>
        <h2 className='hasError__text'>That is not a Pokemon's name.</h2>
    </div>
  )
}

export default HasError