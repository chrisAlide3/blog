import React, { Component } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';

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
        this.props.history.push('/'+id);
    }


    render () {

        const posts = this.state.posts.map(post => {
            
            return (
                // We can handle the click event with a Route Link element
               
                // <Link to={"/" + post.id} key={post.id}>
                //     <Post 
                //         title={post.title} 
                //         author={post.author}
                //     />
                // </Link>

                //Or through the click handler of the Post and call a function
                //to handle the route change. The function has the props of the route
                //so we can use this
                <Post 
                title={post.title} 
                author={post.author}
                clicked={()=>this.selectPostHandler(post.id)}
            />

            );
        });

        return (
            <section className="Posts">
                {posts}
            </section>
        )
    }
}

export default Posts;
