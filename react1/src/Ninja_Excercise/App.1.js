import React, { Component } from 'react';
import Ninjas from './components/NinjaComponent/Ninjas';
import Ninja from './components/NinjaComponent/Ninja';

class App extends Component {
  state = {
    ninjas: [
      {name: "Narendra Maurya", age: 23, belt: "Black", id:1},
      {name: "Brad Traversy", age: 26, belt: "Blue", id:2},
      {name: "Alex Garret", age: 28, belt: "Green", id:3},
      {name: "Sehaj Ahluwalia", age: 23, belt: "Sexy", id:4}
    ]
  }
  render() {
    return (
      <div className="App">
        <h4 className="text-center">I am Mother Component</h4>
        <hr/>

        <Ninja name="Nandy Mandy" age="25" belt="Black" />
        <hr/>
        <Ninjas ninjas={ this.state.ninjas } />

      </div>
    );
  }
}

export default App;
