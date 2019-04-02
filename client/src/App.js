//itunes api //https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/
//https://developer.apple.com/documentation/applemusicapi
// ! can't use axios bc it's client side and request needs to be server side
// ! https://stackoverflow.com/questions/28389699/access-control-allow-origin-denied-spotify-api
import React, { Component } from "react";
import Search from "./Spotify/Search.js";
import { IoIosMusicalNotes } from "react-icons/io";
import { H1 } from "@blueprintjs/core";
import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App bp3-dark bp3-text-large w-100">
        <div className="content">
          <div className="inner-content">
            <div className="stream-links top">
              <H1>Stream links</H1>
              <IoIosMusicalNotes
                alt="Music note"
                className="icon-music"
                size={50}
              />
              <p>
                Have you ever wanted to send a song to someone but weren't sure
                if they had apple music or spotify? This should give you the
                ability to create links for both apple music and spotify.
              </p>
              <br />
              <Search />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
