import React, { Component } from 'react';
import Ninjas from './components/NinjaComponent/Ninjas'
// import Ninja from './components/Ninja';
import AddNinja from './components/NinjaComponent/AddNinja';

class App extends Component {
  state = {
    ninjas: [
      {name: "Narendra Maurya", age: 23, belt: "Black", id:1},
      {name: "Brad Traversy", age: 20, belt: "Blue", id:2},
      {name: "Alex Garret", age: 29, belt: "Green", id:3},
      {name: "Sehaj Ahluwalia", age: 23, belt: "Sexy", id:4}
    ]
  }

  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja]
    this.setState({
      ninjas: ninjas
    })
  }
  
  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      // This check if passed id exists then returns false and that gets added to the new ninja object
      return ninja.id !== id
    });
    // Then sets state to the new ninjas object
    this.setState({
      ninjas:ninjas
    })
  }

  // Component Did mount this will be fired once the component is mounted or created
  componentDidMount(){
    console.log("Component Mounted");
  }

  // Component Did Update this will be fired once the component is updated
  componentDidUpdate(prevProps, prevState){
    console.log('Components Updated');
    console.log(prevProps, prevState);
  }

  render() {
    return (
      <div className="App">
        <h4 className="nav">I am Mother Component</h4>
        <div className="container">
        <AddNinja addNinja={ this.addNinja } />
        <hr/>
        <h3 className="text-center">Ninja List</h3>
        <Ninjas ninjas={ this.state.ninjas } deleteNinja={ this.deleteNinja } />
        </div>
      </div>
    );
  }
}

export default App;
