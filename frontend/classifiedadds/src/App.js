import React, { Component } from 'react';
import ClassifiedBox from "../src/containers/ClassifiedBox"
import LikesCounter from './components/LikesCounter';

class App extends Component {
  render() {
    return (
      <section className= "main-container">
      <h1>Hi from front-end</h1>
      <ClassifiedBox/>
      <LikesCounter/>
      </section>
    );
  }
}

export default App;
