import React from 'react'

const TextWhere = ({where}) => {
  return <h4>{ where ? `Location met: ${where}` : '' }</h4>
  // return where ? <h4>Location met: {where}</h4> : <h4></h4>
  if (where !== '' ){
    return <h4>Location met: {where}</h4>
  } else{
    return <h4></h4>
  }
}

export default TextWhere
