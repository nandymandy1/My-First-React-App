import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../actions/postActions';

class Post extends Component {
    // Connect the component from the Redux Store

    handleDelete = () => {
        this.props.deletePost(this.props.post.id);
        // redirect the user to the home Page
        this.props.history.push('/');
    }

    render() {
        const post = (this.props.post) ? (
            <div className="post">
                <h4 className="center blue-text">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <div className="center">
                    <button className="btn red" onClick={this.handleDelete} >Delete</button>
                </div>
            </div>
        ) : (
                <div className="center">Loading Post ...</div>
            )
        return (
            <div className="container">
                {post}
            </div>
        )
    }
}


const mapStateToProp = (state, ownProps) => {
    // extract post id from the URL
    let id = ownProps.match.params.post_id
    return {
        post: state.posts.find(post => post.id == id)
    }
}


// Dispatches Delete 
const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => { dispatch(deletePost(id)) }
    }
}

export default connect(mapStateToProp, mapDispatchToProps)(Post);