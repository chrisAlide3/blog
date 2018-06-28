import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import asyncComponent from '../../hoc/asyncComponent'

import './Blog.css';
import Posts from './Posts/Posts';
// import NewPost from './NewPost/NewPost';
// import FullPost from './FullPost/FullPost';

const AsyncNewPost = asyncComponent(()=>{
    return import('./NewPost/NewPost');
}) 

class Blog extends Component {
    state = {
        signedIn: true,
    }

    render () {

        return (
            <div>
                <header className='Blog'>
                    <nav>
                        <ul>
                         {/*You also can override the active class to your class or style it inline with activeStyle object*/}
                            <li><NavLink to="/posts" 
                                        exact
                                        // activeClassName="my-active"
                                        // activeStyle={{
                                        //     color: 'green',
                                        //     textDecoration: 'underline'
                                        // }}
                                >Home
                                </NavLink></li>
                            {/* Example with more complex 'to' definition*/} 
                            <li><NavLink to={{
                                pathname: "/new-post",
                                exact: true,
                                // hash: '#submit',
                                // search: '?quick-submit: true'
                            }}>Add Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/*With render we can render any JSX code
                 <Route path='/posts' exact render={() => <h1>Home</h1>} /> */}

                 {/* With component we render a React component */}

                 {/* Here we redirect the root path "/" to another path "/posts" */}

                {/* <Route path="/" exact render={() => (
                    <Redirect to="/posts" /> )}/>
                <Route path="/new-post" exact component={NewPost} />
                <Route path="/posts" component={Posts} /> */}

                {/* With switch the 1st child that match path get rendered, others don't. The order is important! */}
                <Switch>
                    {/* We can use Route to forbid access to a page with conditions, like here. Or we can make the check in ComponentDidMount of the Target route to Push back through History Props of the route */}
                    {/* {this.state.signedIn ?<Route path="/new-post" exact component={NewPost} /> : null} */}

                    {/* Here we call AsyncNewPost for javascript lazy loading. See higher order component 'asyncComponent' */}
                    {this.state.signedIn ?<Route path="/new-post" exact component={AsyncNewPost} /> : null}


                    {/* <Route path="/new-post" exact component={NewPost} /> */}
                    <Route path="/posts" component={Posts} />
                    <Redirect from="/" to="/posts" />
                    {/* <Route path="/posts/:id" exact component={FullPost} /> */}

                    {/* To catch 404 messages, Page not found. Just use <Route without a path. Always put it last. It doesn't work on the root / path if redirect has been defined. In this case it will only work on sub-directories */}
                    {/* <Route render={()=> <h1>Page not found</h1>}/> */}

                </Switch>


            </div>
        )
    }
}

export default Blog;