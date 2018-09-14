import React, { Component } from 'react'
import TextName from './TextName'
import TextWhere from './TextWhere'
import TextWhen from './TextWhen'
import TextWhat from './TextWhat'

const Card = ({firstName, lastName, where, when, what, index, remove}) => {
  return (
    <div key={index} className="card border-dark mb-4 mr-2">
      <TextName firstName={firstName} lastName={lastName}/>
      <div className="card-body ">
        <TextWhere where={where}/>
        <TextWhen when={when}/>
        <ul className="list-group list-group-flush">
          <TextWhat what={what} />
        </ul>
      </div>
      <div className="card-footer buttons d-flex justify-content-between">
        <button id="update" class="btn btn-link btn-lg">Update</button><button id="delete" onClick={()=>remove(index)} class="btn btn-link btn-lg">Delete</button>
      </div>
    </div>
  )
}

export default Card
