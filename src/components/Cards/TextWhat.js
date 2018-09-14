import React from 'react'

const TextWhat = ({what}) => {
  return what.map((whatItem, index) => <li className="list-group-item" key={index}>{whatItem}</li>)
}

export default TextWhat
