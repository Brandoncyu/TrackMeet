import React from 'react'

const TextWhere = ({where}) => {
  if (where !== '' ){
    return <h4>Location met: {where}</h4>
  } else{
    return null
  }
}

export default TextWhere
