import React from 'react'
import '../css/Button.css'


const Button = ({text,icon,IsOutline}) => {
  return (
    <button 
    className={IsOutline? 'outline-btn' : 'primary-btn'}>
        {icon}
        {text}
    </button>
  )
}

export default Button