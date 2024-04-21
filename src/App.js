import "./App.css";
import React, { Component } from "react";
import logo from "./logo.png";
import { useEffect, useState } from "react";
import Champions from "./Champions";
import orianna from "./orianna.png";

class App extends Component {
  state = {
    post: {},
  };
  componentDidMount() {
    this.componentDidMount();
  }

  componentDidMount() {
    fetch(
      "https://ddragon.leagueoflegends.com/cdn/14.8.1/data/en_US/champion.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        this.setState({ post: result.data });
      });
  }

  render() {
    return (
      <div className="App">
        <img src={orianna} className="ori"></img>
        {/* {Object.keys(this.state.post).map((key) => (
          <div key={key}>{this.state.post[key].name}</div>
        ))} */}
        <Champions></Champions>
      </div>
    );
  }
}
export default App;
