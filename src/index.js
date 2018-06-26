import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

//Axios defining global settings/configuration
//For setting a base URL
// axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';//All the calls can now be done with just /endbitofpath
// axios.defaults.headers.common['Authorisation'] = 'AUTH TOKEN';
// axios.defaults.headers.post['Content-Type'] = 'application/json';

//Axios interceptors are global, they will be executed in all programms of the app
axios.interceptors.request.use( request => {
    //Do something with the request then return
    // console.log(request);
    return request;
}, error => {
    // console.log(error);
    // return Promise.reject(error);
    
})

axios.interceptors.response.use( response => {
    //Do something with the response then return
    // console.log(response);
    return response;
}, error => {
    // console.log(error);
    return Promise.reject(error);
    
})

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
