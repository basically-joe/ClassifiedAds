import React, { Component } from 'react';
import ClassifiedBox from "../src/containers/ClassifiedBox"
// import LikesCounter from "../src/components/LikesCounter"
import './App.css';
import "./Adlist.css";
import "./Form.css";

class App extends Component {
  render() {
    return (
      <section className="add-box">
      <ClassifiedBox/>
     
      </section>
    );
  }
}

export default App;
