import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from 'axios';

class Blog extends Component {
    state = {
        posts: [],
        postId: null,
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
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.postId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        )
    }
}

export default Blog;