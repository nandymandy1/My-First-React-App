import React, { Component } from 'react';

class Ninja extends Component {
  render() {
    // console.log(this.props)
    // Storing Variables 
    const { name, age, belt } = this.props;

    return (
      <div className="ninjas">
        <h4 className="text-center">I am single component</h4>
        <div>Name: { name }</div>
        <div>Age: { age }</div>
        <div>Belt: { belt }</div>
      </div>
    );
  }
}

export default Ninja;
