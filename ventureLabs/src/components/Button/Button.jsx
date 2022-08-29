import React from 'react'

function Button(texto) {
  return (
    <div>
        <button onClick={handleClick}>{texto}</button>
    </div>
  )
}

export default Button