import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';

import Main from './pages/Main/Index.js';
import FieldDetails from './pages/Main/FieldDetails.js';
import AlignmentRadioBtns  from './components/Inputs/AlignmentRadioBtns.js';

import BasicForm from './components/forms/BasicForm.js';

import ExampleForm from './components/forms/example/ExampleForm';

import RecordsForm from './components/forms/RecordsForm/RecordsForm';

import NewFields from './pages/NewField/Index.js';
import Search from './pages/Search/Index.js';

const App = () =>{
    return (
        <BrowserRouter>
            <Route path="/" exact component={Main} />
            <Route path="/Search" exact component={Search} />
            <Route path="/grid" exact component={FieldDetails} />
            <Route path="/radio" exact component={AlignmentRadioBtns} />
            <Route path="/New" exact component={NewFields} />
            <Route path="/BasicForm" exact component={BasicForm} />
            <Route path="/ExampleForm" exact component={ExampleForm} />

            <Route path="/RecordsForm" exact component={RecordsForm} />

            <Route path="/BasicForm" exact component={BasicForm} />
            
        </BrowserRouter>
        );
}; 

export default App; 