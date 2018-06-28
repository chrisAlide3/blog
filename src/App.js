import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (

      // If your website root doesn't start at www.example.com/ so the "/" you can define a basename on the BrowserRouter
      // <BrowserRouter basename="/posts">

      <BrowserRouter>
        <div className="App">
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
