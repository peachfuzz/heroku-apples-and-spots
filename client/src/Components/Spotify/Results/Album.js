import React, { Component } from "react";
import { Divider } from "@blueprintjs/core";

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
        images: ["", "", ""],
        tracks: []
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
        console.log(result.tracks);
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
    var counter = 0;
    return (
      <div className="bp3-vertical results w-100">
        <div className="w-85">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={this.state.album.external_urls.spotify}
          >
            <img
              src={this.state.album.images[0].url}
              className="w-85"
              alt={this.state.album.name + "'s album art"}
            />
          </a>
        </div>
        {this.state.album.tracks.items
          ? this.state.album.tracks.items.map(track => {
              counter++;
              // var artists = track.artists[0...n]; // if we ever want to do multiple artists
              return (
                <div className="bp3-vertical results w-100" key={counter}>
                  <div className="tracklist-name">
                    <div className="just-center">
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href={track.external_urls.spotify}
                      >
                        <span className="just-center-more" dir="auto">
                          {track.name}
                        </span>
                      </a>
                    </div>
                    {track.explicit === true ? (
                      <div className="just-center">
                        <span className="explicit-label">Explicit</span>
                      </div>
                    ) : null}

                    <div className="just-center">
                      <span className="ellipsis-one-line" dir="auto">
                        <a
                          rel="noopener noreferrer"
                          target="_blank"
                          href={track.artists[0].external_urls.spotify}
                        >
                          {track.artists[0].name}
                        </a>
                      </span>
                    </div>
                  </div>
                  {/* the divider is inconsistent it it's sizing...
                <Divider className="bp3-vertical" /> */}
                </div>
              );
            })
          : null}
      </div>
    );
  }
}

export default Album;
