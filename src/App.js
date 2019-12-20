import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';

import Main from './pages/Main/Index.js';
import FieldDetails from './pages/Main/FieldDetails.js';


import NewFields from './pages/NewField/Index.js';
import Search from './pages/Search/Index.js';
import MainWrapper from './pages/Main/MainWrapper'; 
import ExpansionScreen from './pages/Main/ExpansionScreen.js';

import AllRules from './pages/AllRules/Index'; 
import CreateNewRule from './pages/CreateNewRule/Index'; 

import CreateFromExistingTemplate from './pages/CreateFromExistingTemplate/Index'; 

import RecentlyCreatedTemplates from './pages/RecentlyCreatedTemplates/Index'; 



const App = () =>{
    return (
        
        <BrowserRouter>
        <MainWrapper >
            <Route path="/" exact component={ExpansionScreen} />
            <Route path="/search" exact component={Search} />
            <Route path="/newField" exact component={NewFields} />
            <Route path="/AllRules" exact component={AllRules} />
            <Route path="/CreateNewRule" exact component={CreateNewRule} />
            <Route path="/CreateFromExistingTemplate" exact component={CreateFromExistingTemplate} />
            <Route path="/RecentlyCreatedTemplates" exact component={RecentlyCreatedTemplates} />

             
            
            {/* <Route path="/newsearch" render={() => <Main someData={someData} />   */}
            <Route path="/grid" exact component={FieldDetails} />




            </MainWrapper>
        </BrowserRouter>
        );
}; 

export default App; 