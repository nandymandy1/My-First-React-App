import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Home extends Component {

    render() {
        // we are now fetching the posts from the redux store
        const { posts } = this.props;

        const postList = (posts.length) ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <div className="card-content">
                            <Link to={'/' + post.id}>
                                <span className="card-title blue-text">{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
                <p className="center">No Posts Yet!</p>
            )
        return (
            <div className="container home">
                <h4 className="center blue-text">Recent Posts</h4>
                {postList}
            </div>
        )
    }
}


// This is the function which takes in the the state of the Component and returns an object
const myStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

// This conencts the redux store with the Component and
// Connect is a method which returns a function in which we wrqap the given component
export default connect(myStateToProps)(Home);