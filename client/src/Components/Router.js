import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import "../App.css";
import { H2, Divider } from "@blueprintjs/core";
import Search from "./Spotify/Search";
import Track from "./Spotify/Results/Track";

class Content extends Component {
  render() {
    return (
      <div className="inner-content">
        <H2>Personal Projects</H2>
        <Link to="/">Search</Link>
        <br />
        <Link to="/tracks?id=0dbTQYW3Ad1FTzIA9t90E8">
          Apple Music and Spotify Link Generator
        </Link>
        <br />
        <br />
        <Divider />
        <Switch>
          <Route exact path={"/"} component={Search} />
          <Route path={"/tracks"} component={Track} />
        </Switch>
      </div>
    );
  }
}

export default Content;
