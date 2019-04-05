import React, { Component } from "react";
import { Icon } from "@blueprintjs/core";
import Tracks from "./Tracks";

class Album extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //figure out a way to avoid this
      id: "",
      album: {
        external_urls: {
          spotify: ""
        },
        images: ["", "", ""]
        //going to have to add more attributes
      }
    };
  }

  componentDidMount() {
    const id = this.props.location.search;
    console.log(id);
    fetch("/api/spotify/album" + id)
      .then(res => res.json())
      .then(result => {
        console.log(result.items);
        // result.album = somehow get that data over here broski
        this.setState({
          album: result
        });
      })
      .catch(error => {
        console.log("ERROR!");
        this.setState({
          album: {}
        });
      });
  }

  render() {
    return this.state.tracks.items ? (
      <Tracks tracks={this.state.album.items} />
    ) : null;
  }
}

export default Album;
