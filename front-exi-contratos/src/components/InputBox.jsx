import React from 'react'
import '../assets/css/InputBox.css'

const InputBox = ({type,title,ph}) => {
  return (
    <div>
        <h2>{title}:</h2>
        <input placeholder={ph} type={type}></input>
    </div>
  )
}

export default InputBox