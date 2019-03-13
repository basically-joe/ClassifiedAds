import React, { Component } from 'react';
import ClassifiedBox from "../src/containers/ClassifiedBox"
import './App.css';
import "./Adlist.css";
import "./Form.css";
import "./Normalize.css";

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
