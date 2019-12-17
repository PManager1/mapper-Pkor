import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'; 

import Home from './pages/Home/index.js';

import Main from './pages/Main/Index.js';

import Search from './pages/Search/Index.js';

import PageTwo from './pages/PageTwo'; 

import HowItWorks from './pages/HowItWorks/Index.js';

import ContactUs from './pages/ContactUs/Index.js';

import WhyUs from './pages/WhyUs/Index.js';
import Testimonials from './pages/Testimonials/Index.js'

// import 'react-select/dist/react-select.css';


const App = () =>{
    return (
        <BrowserRouter>
            <Route path="/" exact component={Main} />
            <Route path="/Search" exact component={Search} />
            <Route path="/page2" exact component={PageTwo} />
            <Route path="/Howitworks" exact component={HowItWorks} />
            <Route path="/ContactUs" exact component={ContactUs} />            
            
            <Route path="/WhyUs" exact component={WhyUs} />
            <Route path="/Testimonials" exact component={Testimonials} />

        </BrowserRouter>
        );
}; 

export default App; 