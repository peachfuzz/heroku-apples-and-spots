//itunes api //https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/
//https://developer.apple.com/documentation/applemusicapi
// ! can't use axios bc it's client side and request needs to be server side
// ! https://stackoverflow.com/questions/28389699/access-control-allow-origin-denied-spotify-api
import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Content from "./Components/Router";
import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App bp3-dark bp3-text-large">
        <div className="content">
          <div className="w-100 stream-links top">
            <Router>
              <Content />
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
