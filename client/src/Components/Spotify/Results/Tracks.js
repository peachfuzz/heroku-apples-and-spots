import React, { Component } from "react";
import { Divider, Button } from "@blueprintjs/core";
import { withRouter, Link } from "react-router-dom";

class Tracks extends Component {
  render() {
    var counter = 0;
    return this.props.tracks.map(track => {
      counter++;
      // var artists = track.artists[0...n]; // if we ever want to do multiple artists
      return (
        <div className="bp3-vertical results w-100" key={counter}>
          <div className="cover-art-image">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={track.album.external_urls.spotify}
            >
              <img
                src={track.album.images[1].url}
                className="cover-art-image"
                alt={track.name + "'s album art"}
              />
            </a>
          </div>
          <div className="tracklist-name">
            <div className="ellipsis-one-line">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={track.external_urls.spotify}
              >
                <span className="ellipsis-one-line" dir="auto">
                  {track.name}
                </span>
              </a>
            </div>
            {track.explicit === true ? (
              <div className="ellipsis-one-line">
                <span className="explicit-label">Explicit</span>
              </div>
            ) : null}

            <div className="ellipsis-one-line">
              <span className="ellipsis-one-line" dir="auto">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={track.artists[0].external_urls.spotify}
                >
                  {track.artists[0].name}
                </a>
                {/* if we ever care to show all artists
                    {artists.map(items => {
                      return (
                        <a rel="noopener noreferrer" target="_blank" href={track.artists[0].external_urls.spotify}>
                          {track.artists[0].name + ", "}
                        </a>
                      );
                    })} */}
              </span>
            </div>
            <div className="ellipsis-one-line">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={track.album.external_urls.spotify}
              >
                {track.album.name}
              </a>
            </div>
            <div className="ellipsis-one-line">
              {/* <Button
                text="More"
                onClick={() =>
                  this.props.history.push("/tracks?id=" + track.id)
                }
              /> */}
              <Link to={"/tracks?id=" + track.id}>More...</Link>
            </div>
          </div>
          <Divider />
        </div>
      );
    });
  }
}

export default withRouter(Tracks);
