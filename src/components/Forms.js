import React, {Component} from 'react'
import FormsCreate from './FormsCreate'
import FormsSearch from './FormsSearch'
import FormsSort from './FormsSort'

class Forms extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(<div className="col-4 ml-2" id="for-forms">
      <div className="sticky-top">
        <button onClick={this.props.createToggle} className="collapsible editing" id="createTitle">Create Card!</button>
        <FormsCreate create={this.props.create} createOn={this.props.createOn}/>
        <button className="collapsible" onClick={this.props.searchToggle}>Search Your Cards!</button>
        <FormsSearch searchOn={this.props.searchOn}/>
        <button className="collapsible" onClick={this.props.sortToggle}>Sort Your Cards!</button>
        <FormsSort sortOn={this.props.sortOn} />
      </div>
    </div>)}
}

export default Forms
