import React, {Component} from 'react'

class FormsSort extends Component {
  constructor(props){
    super(props)
  }

  render(){
    const sortOn = this.props.sortOn ? 'block' : 'none'
    return(<div className="content" style={{ display: sortOn }}>
      <form id="sort" className="text-center">
        <h2 className="text-center mb-4">Sort Your Cards!</h2>
        <button id="firstSort" className="m-2 btn btn-primary">First Name</button>
        <button id="lastSort" className="m-2 btn btn-warning">Last Name</button>
        <button id="dayMeet" className="m-2 btn btn-danger">Date Met</button><br />
      </form>
    </div>)}
}

export default FormsSort
