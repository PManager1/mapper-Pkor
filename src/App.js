import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'; 

import Home from './pages/Home/index.js';

import Main from './pages/Main/Index.js';

import FullWidthGrid from './pages/Main/FullWidthGrid.js';

import FormControlLabelPosition from './pages/Main/RadioBtns.js';
import Search from './pages/Search/Index.js';


const App = () =>{
    return (
        <BrowserRouter>
            <Route path="/" exact component={Main} />
            <Route path="/Search" exact component={Search} />
            <Route path="/grid" exact component={FullWidthGrid} />
            <Route path="/radio" exact component={FormControlLabelPosition} />
        </BrowserRouter>
        );
}; 

export default App; 