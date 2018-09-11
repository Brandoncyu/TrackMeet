import React from 'react'
const Header = () => {
  return (<div className = "container-fluid mb-4 " id = "top">
      <div className = "row" id = "topHalf">
        <div className = "col d-flex flex-column p-4">
          <h1 id ="trackmeet">TrackMeet</h1>
        </div>
      </div>
      <div className = "row" id = "bottomHalf">
        <div className = "col-2 d-flex flex-column justify-content-end "></div>
        <div className = "col d-flex flex-column justify-content-center">
          <p className = "pr-4 ">Hello and welcome to TrackMeet! This app was designed to help you keep track of the people you have met over time. If you someone you know you will interact with in the future, you can create a card of his or her name, where you met, when you met, as well as some interesting facts that you can bring up next time you meet! </p>
        </div>
        <div className = "col-2 d-flex flex-column justify-content-end "></div>

      </div>
    </div>)
}

export default Header
