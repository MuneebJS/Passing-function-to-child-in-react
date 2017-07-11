import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class GrandChild extends Component {

  render() {
    return (
      <div>
        <h1>Name:</h1>
          <p>{this.props.name}</p>
        <h1> Age: </h1>
          <p>{this.props.age}</p>

        <button onClick={this.props.clickHandler}>
          Show Muneeb
        </button>
        <br />
        <button onClick={this.props.clickHandler2}>
          Show Haider
        </button>
      </div>
    );
  }
}



class Child extends Component {
  render() {
    return (
      <div>
        <GrandChild clickHandler={this.props.clickHandler} clickHandler2={this.props.clickHandler2}
          name={this.props.name} age={this.props.age}
        />
      </div>
    );
  }
}



class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Shoaib Noor',
      age: "20"
    }
  }


  clickHandler() {
    this.setState({
      name: "Muneeb Khan",
      age: '50'
    })
  }

  clickHandler2() {
    console.log("2 fired")
    this.setState({
      name: "Haider Ali",
      age: '80'
    })
  }

  render() {
    return (
      <div>
        <Child clickHandler={this.clickHandler.bind(this)}
        clickHandler2={this.clickHandler2.bind(this)}
         name={this.state.name} age={this.state.age} />
      </div>
    );
  }
}




export default Parent;
