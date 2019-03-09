import React, { Component } from 'react';
import ClassifiedBox from "../src/containers/ClassifiedBox"
import './App.css';
import "./Adlist.css";

class App extends Component {
  render() {
    return (
      <section>
      <ClassifiedBox/>
      </section>
    );
  }
}

export default App;
