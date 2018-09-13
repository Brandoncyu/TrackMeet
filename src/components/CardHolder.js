import React, { Component } from 'react'
import Card from './Card'

const CardHolder = ({cards}) => {
  return cards.map((cardInfo, index) => <div key={index}><Card {...cardInfo}  index={index}/><br /></div>)
}

export default CardHolder
