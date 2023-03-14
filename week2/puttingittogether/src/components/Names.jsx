import React from 'react'

function Names(props) {

  return (
    <div>
        <h1>{props.name}</h1>
        <h3>Age: {props.age}</h3>
        <h3>Hair Color: {props.hair}</h3>
    </div>
  )
}

export default Names