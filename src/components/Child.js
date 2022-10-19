import React from 'react'

export default function Child(props) {
  return (
    <div>
        <button className='btn btn-secondary' onClick={props.alertHandler}>Click to Alert</button>
    </div>
  )
}
