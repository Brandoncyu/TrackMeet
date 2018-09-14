import React, {Component} from 'react'

class FormsCreate extends Component {
  constructor(props){
    super(props)
  }

  adding = event => {
    event.preventDefault()
    let newInputArea = document.querySelector('#newInputArea')
    let newInput = document.createElement('input')
    newInput.setAttribute('placeholder', "Something interesting about this person");
    newInput.setAttribute("class", "form-control")
    newInputArea.appendChild(newInput)

  }

  render(){
    const createOn = this.props.createOn ? 'block' : 'none'
    return(<div className="content" id="editor" style={{ display: createOn }}>
      <form id="create">
        <h2 className="text-center mb-4" id="createTitle">Create Card!</h2>
        <div className="form-row">
          <div className="form-group col">
            <label htmlFor= "firstname">First Name</label><br />
            <input type="name" className="form-control" name="firstname" id="firstname" placeholder="First Name" required="required" />
          </div>
          <div className="form-group col">
            <label htmlFor= "lastname">Last Name</label><br />
            <input type="name" name="lastname" className="form-control" id="lastname" placeholder="Last Name" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col">
            <label htmlFor="where">Where did you meet this person?</label><br />
            <input type="text" className="form-control" name="where" id="where" placeholder="Type in the Location Here" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col">
            <fieldset className="date">
              <label>When did you meet this person?
              </label><br />
              <select id="month" name="month">
                <option value='00'></option>
                <option value='01'>January</option>
                <option value='02'>February</option>
                <option value='03'>March</option>
                <option value='04'>April</option>
                <option value='05'>May</option>
                <option value='06'>June</option>
                <option value='07'>July</option>
                <option value='08'>August</option>
                <option value='09'>September</option>
                <option value='10'>October</option>
                <option value='11'>November</option>
                <option value='12'>December</option>
              </select>
               -
              <select id="day" name="day">
                <option value='00'></option>
                <option value='01'>1</option>
                <option value='02'>2</option>
                <option value='03'>3</option>
                <option value='04'>4</option>
                <option value='05'>5</option>
                <option value='06'>6</option>
                <option value='07'>7</option>
                <option value='08'>8</option>
                <option value='09'>9</option>
                <option value='10'>10</option>
                <option value='11'>11</option>
                <option value='12'>12</option>
                <option value='13'>13</option>
                <option value='14'>14</option>
                <option value='15'>15</option>
                <option value='16'>16</option>
                <option value='17'>17</option>
                <option value='18'>18</option>
                <option value='19'>19</option>
                <option value='20'>20</option>
                <option value='21'>21</option>
                <option value='22'>22</option>
                <option value='23'>23</option>
                <option value='24'>24</option>
                <option value='25'>25</option>
                <option value='26'>26</option>
                <option value='27'>27</option>
                <option value='28'>28</option>
                <option value='29'>29</option>
                <option value='30'>30</option>
                <option value='31'>31</option>
              </select>
               -
              <select id="year" name="year">
                <option value='0000'></option>
                <option value='2018'>2018</option>
                <option value='2017'>2017</option>
                <option value='2016'>2016</option>
                <option value='2015'>2015</option>
                <option value='2014'>2014</option>
                <option value='2013'>2013</option>
                <option value='2012'>2012</option>
                <option value='2011'>2011</option>
                <option value='2010'>2010</option>
                <option value='2009'>2009</option>
                <option value='2008'>2008</option>
                <option value='2007'>2007</option>
                <option value='2006'>2006</option>
                <option value='2005'>2005</option>
                <option value='2004'>2004</option>
                <option value='2003'>2003</option>
                <option value='2002'>2002</option>
                <option value='2001'>2001</option>
                <option value='2000'>2000</option>
              </select><br />
              <span className="inst">(Month - Day - Year)</span>
            </fieldset>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col" id="big-what">
            <label htmlFor="what">What are some interesting things you learned about this person?</label><br />
            <input type="text" className="form-control" name="what" id="what0" placeholder="Something interesting about this person" />
            <input type="text" className="form-control" name="what" id="what1" placeholder="Something interesting about this person" />
            <input type="text" className="form-control" name="what" id="what2" placeholder="Something interesting about this person" />
            <span id="newInputArea"></span>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col" id="big-what">
            <button id="add" onClick={this.adding} className="btn btn-sm">+add another attribute</button>
          </div>
        </div>
        <button type="submit" onClick={this.props.create} className="btn btn-primary btn-lg btn-block" id="make">Create</button>
      </form>
    </div>
    )
  }
}

export default FormsCreate
