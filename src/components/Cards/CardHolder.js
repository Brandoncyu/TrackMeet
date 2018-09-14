import React, { Component } from 'react'
import Card from './Card'

const CardHolder = ({cards, remove}) => {
  return cards.map((cardInfo, index) => <Card {...cardInfo} remove={remove} index={index}/>)
}

export default CardHolder
