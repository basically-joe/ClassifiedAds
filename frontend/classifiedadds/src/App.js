import React, { Component } from 'react';
import ClassifiedBox from "../src/containers/ClassifiedBox"
import './App.css';

class App extends Component {
  render() {
    return (
      <section>
      <h1>Hi from front-end</h1>
      <ClassifiedBox/>
      </section>
    );
  }
}

export default App;
