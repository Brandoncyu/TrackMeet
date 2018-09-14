import React, {Component} from 'react'

class FormsSearch extends Component {
  constructor(props){
    super(props)
  }

  render(){
    const searchOn = this.props.searchOn ? 'block' : 'none'
    return(<div className="content" style={{ display: searchOn }}>
      <form id="search" className="text-center">
        <h2 className="text-center mb-4">Search Your Cards!</h2>
        <input type="text" id="myInput" className="form-control" placeholder="Put in your keywords" /><br />
        <div className="d-flex justify-content-around">
          <button type="submit" className="btn btn-secondary btn-lg ">Search</button>
          <button id="reset" className="btn btn-secondary btn-lg ">Reset</button>
        </div>
      </form>
    </div>)}
}

export default FormsSearch
