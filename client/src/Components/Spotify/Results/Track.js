import React, { Component } from "react";

class Track extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //figure out a way to avoid this
      id: "",
      track: {
        album: {
          external_urls: {
            spotify: ""
          },
          images: ["", "", ""]
        },
        external_urls: {
          spotify: ""
        },
        name: "",
        explicit: true,
        artists: {
          0: {
            external_urls: {
              spotify: ""
            }
          },
          1: {
            external_urls: {
              spotify: ""
            }
          },
          2: {
            external_urls: {
              spotify: ""
            }
          }
        }
      }
    };
  }

  componentDidMount() {
    const id = this.props.location.search;
    console.log(id);
    fetch("/api/spotify/tracks" + id)
      .then(res => res.json())
      .then(result => {
        console.log(result);
        this.setState({
          track: result
        });
      })
      .catch(error => {
        console.log("ERROR!");
        this.setState({
          track: {}
        });
      });
  }

  render() {
    // var artists = this.props.track.artists[0...n]; // if we ever want to do multiple artists
    return (
      <div className="bp3-vertical results w-100">
        <div className="w-85">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href={this.state.track.album.external_urls.spotify}
          >
            <img
              src={this.state.track.album.images[0].url}
              className="w-85"
              alt={this.state.track.name + "'s album art"}
            />
          </a>
        </div>
        <div className="just-center">
          <div className="just-center-more">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={this.state.track.external_urls.spotify}
            >
              <span className="just-center-more" dir="auto">
                {this.state.track.name}
              </span>
            </a>
          </div>
          {this.state.track.explicit === true ? (
            <div className="just-center-more">
              <span className="explicit-label">Explicit</span>
            </div>
          ) : null}
          <div className="just-center-more">
            <span className="just-center-more" dir="auto">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={this.state.track.artists[0].external_urls.spotify}
              >
                {this.state.track.artists[0].name}
              </a>
            </span>
          </div>
          <div className="just-center-more">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={this.state.track.album.external_urls.spotify}
            >
              {this.state.track.album.name}
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Track;
