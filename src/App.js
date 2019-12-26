import React from 'react';
import { BrowserRouter, Switch, Route, HashRouter, Link } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './pages/Main/Index.js';
import FieldDetails from './pages/Main/FieldDetails.js';
import NewFields from './pages/NewField/Index.js';
import NewRecord from './pages/NewRecord/Index.js';
import Search from './pages/Search/Index.js';
import MainWrapper from './pages/Records/MainWrapper'; 
import ExpansionScreen from './pages/Main/ExpansionScreen.js';

import AllLogic from './pages/AllLogic/Index'; 
import CreateNewLogic from './pages/CreateNewLogic/Index'; 

import CreateFromExistingTemplate from './pages/CreateFromExistingTemplate/Index'; 
import RecentlyCreatedTemplates from './pages/RecentlyCreatedTemplates/Index'; 
import Login from './pages/Login/Index.js';
import NotFound from './pages/NotFound/Index.js'; 
import TemporaryDrawer from './components/DrawerDemo.js'; 

import ClientDetail from './pages/Search/ClientDetail.js';

import ModalFormDialog from './components/ModalFormDialog.js'; 
import { selectClient } from './actions'; 

import Records from './pages/Records/Index.js';
import  LinearIndeterminate from './components/LinearProgress.js'; 

const App = () =>{
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/ModalFormDialog" exact component={ModalFormDialog} />
                <Route exact path="/drawer" exact component={TemporaryDrawer} />
                <Route exact path="/login" exact component={Login} />


                <MainWrapper >
                    {/* <Route exact path="/" exact component={ExpansionScreen} /> */}
                    <Route exact path="/" exact component={Records} />
                    <Route exact path="/records" exact component={Records} />
                    <Route exact path="/clientdetail" exact component={ClientDetail} />
                    <Route exact path="/search" component={Search} />
                    <Route exact path="/search/:id" component={ClientDetail} />
                    <Route exact path="/newField" component={NewFields} />
                    <Route exact path="/newrecord" component={NewRecord} />

                    <Route exact path="/AllLogic" component={AllLogic} />
                    <Route exact path="/createnewlogic" component={CreateNewLogic} />
                    <Route exact path="/CreateFromExistingTemplate" component={CreateFromExistingTemplate} />
                    <Route exact path="/RecentlyCreatedTemplates" component={RecentlyCreatedTemplates} />
                    {/* <Route exact component={NotFound} /> */}
                </MainWrapper>
            </Switch>
        </HashRouter>
        );
}; 

export default App; 