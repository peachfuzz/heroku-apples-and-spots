import React, { Component } from "react";
import { Divider, Icon } from "@blueprintjs/core";

class Albums extends Component {
  render() {
    var counter = 0;
    return this.props.albums.map(album => {
      counter++;
      return (
        <div className="results w-100" key={counter}>
          <div className="cover-art-image">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={album.external_urls.spotify}
            >
              {album.images[1] ? (
                <img
                  src={album.images[1].url}
                  className="cover-art-image"
                  alt={album.name + "'s album art"}
                />
              ) : album.images[0] ? (
                <img
                  src={album.images[0].url}
                  className="cover-art-image"
                  alt={album.name + "'s album art"}
                />
              ) : (
                <Icon
                  icon="floppy-disk"
                  className="cover-art-image"
                  alt={
                    album.name +
                    " doesn't have any album art, using a default image"
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
                href={album.external_urls.spotify}
              >
                <span className="ellipsis-one-line" dir="auto">
                  {album.name}
                </span>
              </a>
            </div>
            <div className="ellipsis-one-line">
              <span className="ellipsis-one-line" dir="auto">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={album.artists[0].external_urls.spotify}
                >
                  {album.artists[0].name}
                </a>
                {/* if we ever care to show all artists
                          {artists.map(items => {
                            return (
                              <a rel="noopener noreferrer" target="_blank" href={album.artists[0].external_urls.spotify}>
                                {album.artists[0].name + ", "}
                              </a>
                            );
                          })} */}
              </span>
            </div>
            <div className="ellipsis-one-line">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={album.external_urls.spotify}
              >
                {album.name}
              </a>
            </div>
          </div>
          <Divider />
        </div>
      );
    });
  }
}

export default Albums;
