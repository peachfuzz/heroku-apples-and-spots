import React, { Component } from "react";
import { Divider, Icon } from "@blueprintjs/core";
class Artists extends Component {
  render() {
    var counter = 0;
    return this.props.artists.map(artist => {
      counter++;
      return (
        <div className="results w-100" key={counter}>
          <div className="cover-art-image">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={artist.external_urls.spotify}
            >
              {artist.images[1] ? (
                <img
                  src={artist.images[1].url}
                  className="cover-art-image"
                  alt={artist.name + "'s picture"}
                />
              ) : (
                <Icon
                  icon="mugshot"
                  className="cover-art-image"
                  alt={
                    artist.name +
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
                href={artist.external_urls.spotify}
              >
                <span className="ellipsis-one-line" dir="auto">
                  {artist.name}
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

export default Artists;
