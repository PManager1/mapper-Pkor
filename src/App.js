import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'; 

import Home from './pages/Home/index.js';

import Main from './pages/Main/Index.js';

import Search from './pages/Search/Index.js';


const App = () =>{
    return (
        <BrowserRouter>
            <Route path="/" exact component={Main} />
            <Route path="/Search" exact component={Search} />
        </BrowserRouter>
        );
}; 

export default App; 