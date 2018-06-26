import React, { Component } from 'react';
import axios from 'axios';

import './Posts.css';

import Post from '../../../components/Post/Post';

class Posts extends Component {
    state = {
        posts: [],
    }

    componentDidMount () {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                //Only take the first 5 posts
                const posts = response.data.slice(0, 4);
                //Adding Author field to the state
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Chris',
                    }
                });
                this.setState({posts: updatedPosts});
                
            })
            .catch(err => {
                console.log(err);
                
            });
    }

    selectPostHandler = (id) => {
        this.setState({postId: id});
    }


    render () {

        const posts = this.state.posts.map(post => {
            
            return <Post 
                        key={post.id} 
                        title={post.title} 
                        author={post.author}
                        clicked={()=>this.selectPostHandler(post.id)}
                    />
        });

        return (
            <section className="Posts">
                {posts}
            </section>
        )
    }
}

export default Posts;
