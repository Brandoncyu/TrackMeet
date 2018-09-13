import React, { Component } from 'react';
import Header from './components/Header'
import Body from './components/Body'
import './App.css';

class App extends Component {
  constructor(){
    super()
    let importedData = JSON.parse(localStorage.getItem('cards'))
    if (importedData == null) importedData = []
    this.state = {
      createOn: false,
      searchOn: false,
      sortOn: false,
      cards: importedData
    }
  }

  createToggle = () => {
    this.setState({
      createOn: !this.state.createOn
    })
  }

  searchToggle = () => {
    this.setState({
      searchOn: !this.state.searchOn
    })
  }

  sortToggle = () => {
    this.setState({
      sortOn: !this.state.sortOn
    })
  }

  create = event => {
    event.preventDefault()

    const firstName = document.querySelector('#firstname').value
    const lastName = document.querySelector('#lastname').value
    const where = document.querySelector('#where').value
    const when = document.querySelector('#year').value + '-' + document.querySelector('#month').value + '-' + document.querySelector('#day').value
    let what = []
    const whatQueries = document.querySelectorAll('#big-what input')
    for (let i = 0; i < whatQueries.length; i++){
      if (whatQueries[i].value){
        what.push(whatQueries[i].value)
      }
    }

    let exportedValues = {
      'firstName': firstName,
      'lastName': lastName,
      'where': where,
      'when': when,
      'what': what
    }
    //this removes all the cards so you can re-render the new ones.
    let importedData = JSON.parse(localStorage.getItem('cards'))
    if (importedData == null) importedData = []
    importedData.push(exportedValues)
    localStorage.setItem('cards', JSON.stringify(importedData))

    //This re-renders all the cards (plus the new one).
    // importedData.forEach((element, index) => cardRenderer(element, index))


    //this is to make sure that every time you add a card, it takes you straight to it on the anchor tag on the page, which is where the new card renders.

    this.setState({
      createOn: false,
      searchOn: false,
      sortOn: false,
      cards: importedData
    })

    document.getElementById("bottom").scrollIntoView();

    //this reset the create form and also brings the number of attribute boxes back to 3.
    document.getElementById('create').reset();
    document.querySelector('#newInputArea').innerHTML = ''
  }

  render() {
    return (
      <div>
        <Header />
        <Body createOn={this.state.createOn} createToggle={this.createToggle} searchOn={this.state.searchOn} searchToggle={this.searchToggle} sortOn={this.state.sortOn} sortToggle={this.sortToggle} create={this.create} cards={this.state.cards}/>
      </div>
    );
  }
}

export default App;
