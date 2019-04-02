import React, { Component } from "react";
import { Divider, Icon } from "@blueprintjs/core";
class Playlists extends Component {
  render() {
    var counter = 0;
    return this.props.playlists.map(playlist => {
      counter++;
      // var artists = playlist.artists[0...n]; // if we ever want to do multiple artists
      return (
        <div className="results w-100" key={counter}>
          <div className="cover-art-image">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={playlist.external_urls.spotify}
            >
              {playlist.images[0] ? (
                <img
                  src={playlist.images[0].url}
                  className="cover-art-image"
                  alt={playlist.name + "'s picture"}
                />
              ) : (
                <Icon
                  icon="mugshot"
                  className="cover-art-image"
                  alt={
                    playlist.name +
                    " doesn't have a picture, using a default image"
                  }
                  iconSize={100}
                />
              )}
            </a>
          </div>
          <div className="tracklist-name">
            <div className="ellipsis-one-line">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={playlist.external_urls.spotify}
              >
                <span className="ellipsis-one-line" dir="auto">
                  {playlist.name}
                </span>
              </a>
            </div>
          </div>
          <Divider />
        </div>
      );
    });
  }
}

export default Playlists;
