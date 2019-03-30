import React, { Component } from "react";
import "./App.css";
import Nav from "../../Nav";
import DummyData from "./dummyData";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.setState({ data: DummyData });
  }
  render() {
    return (
      <div className="App">
        <Nav />
      </div>
    );
  }
}

export default App;
