import React, { Component } from 'react'
import TextName from './TextName'
import TextWhere from './TextWhere'

const Card = ({firstName, lastName, where, when, what, index}) => {


  return (
    <div class="card border-dark mb-4 mr-2">
      <TextName firstName={firstName} lastName={lastName}/>
      <div class="card-body ">
        <TextWhere where={where}/>
        <h5>Met March 05, 2018</h5>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Owns a house in Rainier Beach</li>
          <li class="list-group-item">Family in Aviation Industry</li>
          <li class="list-group-item">Likes Anime</li>
        </ul>
      </div>
      <div class="card-footer buttons d-flex justify-content-between">
        <button id="update" class="btn btn-link btn-lg" data-id="9">Update</button><button id="delete" data-id="9" class="btn btn-link btn-lg">Delete</button>
      </div>
    </div>
  )
}

export default Card
