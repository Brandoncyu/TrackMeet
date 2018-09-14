import React, { Component } from 'react'
import Forms from './Forms/Forms'
import CardHolder from './Cards/CardHolder'

class Body extends Component {
  constructor(props){
    super(props)
  }


  render(){
    return (
      <div className="container-fluid body">
        <div className="row">
          <Forms createOn={this.props.createOn} createToggle={this.props.createToggle} searchOn={this.props.searchOn} searchToggle={this.props.searchToggle} sortOn={this.props.sortOn} sortToggle={this.props.sortToggle} create={this.props.create}/>
          <div className="col card-group" id="card-display">
            <CardHolder cards={this.props.cards} remove={this.props.remove} />
          </div>
        </div>
        <div id="bottom"></div>
      </div>
    )
  }
}

export default Body
