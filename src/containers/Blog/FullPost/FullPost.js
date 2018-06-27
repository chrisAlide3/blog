import React, { Component } from 'react';

import './FullPost.css';
import axios from 'axios';

class FullPost extends Component {

    state = {
        loadedPost: null,
    }

    componentDidMount () {
        this.loadPost();
    }

    componentDidUpdate () {
        this.loadPost();
    }

    loadPost = () => {
        const {id} = this.props.match.params;
        //The received ID is a string, our database ID however is a number
        // In the below comparision we convert the received ID to a number. For this just add a + in front of the string value
        if (id) {

            if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== +id)) {
                axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
                .then(response => {
                    this.setState({loadedPost: response.data});
                })
                .catch(err => {
                    console.log(err);
                })
            }
        }
    }

    deletePostHandler = () => {
        axios.delete('https://jsonplaceholder.typicode.com/posts/' + this.props.match.params.id)
        .then(response => {
            console.log(response);
            alert("Post deleted");
        })
        .catch(err => {
            console.log(err);
        })
    }

    render () {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        if (this.props.match.params.id) {
            post = <p style={{textAlign: 'center'}}>Loading...</p>;
        }
        if (this.state.loadedPost) {
        
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button onClick={this.deletePostHandler} className="Delete">Delete</button>
                    </div>
                </div>

            );
        }
            return post;
    }
}

export default FullPost;