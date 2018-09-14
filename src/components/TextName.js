import React from 'react'

const TextName = ({firstName, lastName}) => {
  if (firstName == '' && lastName !== '' ) {
    return <h3 className="card-header">{lastName}</h3>
  } else if (firstName !== '' || lastName !== '' ){
    return <h3 className="card-header">{firstName} {lastName}</h3>
  } else {
    return null
  }
}

export default TextName
