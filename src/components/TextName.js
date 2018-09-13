import React from 'react'

const TextName = ({firstName, lastName}) => {
  if (firstName !== '' && lastName !== ''){
    return <h3 class="card-header">{firstName} {lastName}</h3>
  } else {
    return null
  }
}

export default TextName
