import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import "../App.css";
import { H2, Divider } from "@blueprintjs/core";
import Search from "./Spotify/Search";
import Track from "./Spotify/Results/Track";
import Album from "./Spotify/Results/Album";
import Playlist from "./Spotify/Results/Playlist";

class Content extends Component {
  render() {
    return (
      <div className="inner-content">
        <H2>Personal Projects</H2>
        <Link to="/">Search</Link>
        <br />
        <br />
        <Divider />
        <Switch>
          <Route exact path={"/"} component={Search} />
          <Route path={"/track"} component={Track} />
          <Route path={"/album"} component={Album} />
          <Route path={"/playlist"} component={Playlist} />
        </Switch>
      </div>
    );
  }
}

export default Content;
