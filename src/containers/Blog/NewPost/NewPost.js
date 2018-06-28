import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';

import './NewPost.css';
import axios from 'axios';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max',
        // submitted: false,
    }

    addPostHandler = () => {
        const post = {
            title: this.state.title,
            body: this.state.content,

        }
        axios.post('https://jsonplaceholder.typicode.com/posts', post)
        .then(response => {
            console.log(response);
            //Here we set a new state then render the Redirect component to go to new route
            // this.setState({submitted: true});
            //We can achieve the same redirect without state and rendering by simply pushing to the new route
            this.props.history.push("/props");
        })
        .catch(err => {
            console.log(err);
            
        })
    }

    render () {

        // Example for route redirect using State
        // let redirect = null;
        // if (this.state.submitted) {
        //     redirect = <Redirect to="/posts" />
        // }

        return (
            <div className="NewPost">
                {/* Example for route redirect using State */}
                {/* {redirect} */}
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button onClick={this.addPostHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;