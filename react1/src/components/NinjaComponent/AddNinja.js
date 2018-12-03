import React, { Component } from 'react';

class AddNinja extends Component {
    state = {
        name: null,
        age: null,
        belt: null
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);
        // add ninja to the main List of the root component
        this.props.addNinja(this.state);
        
    }
    render(){
        return(
            <form onSubmit={ this.handleSubmit }>
                <h4 className="text-center">Add Ninja</h4>
                <div className="from-group">
                    <label htmlFor="name">Ninja Name</label>
                    <input className="form-control" type="text" name="name" id="name" placeholder="Name" onChange={ this.handleChange }/>
                </div>
                <div className="from-group">
                    <label htmlFor="age">Age</label>
                    <input className="form-control" type="number" placeholder="Age" name="age" id="age" onChange={ this.handleChange }/>
                </div>
                <div className="from-group">
                    <label htmlFor="belt">Belt</label>
                    <input className="form-control" type="text" placeholder="Belt" name="belt" id="belt" onChange={ this.handleChange }/>
                </div>
                <br/>
                <input type="submit" value="Submit" className="btn btn-primary btn-md" />
            </form>
        )
    }
}

export default AddNinja;