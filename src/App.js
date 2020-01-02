import React from 'react';
import { BrowserRouter, Switch, Route, HashRouter, Link } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import NewFields from './pages/NewField/Index.js';
import NewRecord from './pages/NewRecord/Index.js';
import Search from './pages/Search/Index.js';
import MainWrapper from './pages/OldRecords/MainWrapper'; 

import AllLogic from './pages/Logics/Index'; 
import CreateLogic from './pages/CreateNewLogic/Index'; 

import CreateFromExistingTemplate from './pages/CreateFromExistingTemplate/Index'; 
import RecentlyCreatedTemplates from './pages/RecentlyCreatedTemplates/Index'; 
import Login from './pages/Login/Index.js';
import NotFound from './pages/NotFound/Index.js'; 
import TemporaryDrawer from './components/DrawerDemo.js'; 

import ClientDetail from './pages/Search/ClientDetail.js';

import ModalFormDialog from './components/ModalFormDialog.js'; 
import { selectClient } from './actions'; 
import OldRecords from './pages/OldRecords/Index.js';
import  LinearIndeterminate from './components/LinearProgress.js'; 

import Later from './pages/Later/Index.js'; 

import Records from './pages/Records/Index.js'; 
import EditRecords from './pages/EditRecords/Index.js'; 


import FullWidthGrid from './pages/Example/Grid.js'; 
import styledgrid from './pages/Example/styledgrid.js'; 
import LoadingSpiner from './pages/Example/Loading.js'; 
import RulePicker from './pages/Records/RulePicker.js'; 

import SuccessSnackbar from './pages/Example/SnackbarDemo.js'; 


import FullDialog from './pages/Records/FullDialog.js'; 

const App = () =>{
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/ModalFormDialog" exact component={ModalFormDialog} />
                <Route exact path="/drawer" exact component={TemporaryDrawer} />
                <Route exact path="/login" exact component={Login} />

                
                
                <MainWrapper >
                
                <Route exact path="/rulepicker" exact component={RulePicker} />
                <Route exact path="/later" exact component={Later} />
                    {/* <Route exact path="/" exact component={ExpansionScreen} /> */}
                    <Route exact path="/" exact component={Records} />
                    
                    <Route exact path="/clientdetail" exact component={ClientDetail} />
                    <Route exact path="/search" component={Search} />
                    <Route exact path="/search/:id" component={ClientDetail} />
                    <Route exact path="/newField" component={NewFields} />
                    <Route exact path="/newrecord" component={NewRecord} />
                    <Route exact path="/editrecords" component={EditRecords} />

                    <Route exact path="/grid" exact component={FullWidthGrid} />
                    <Route exact path="/styledgrid" exact component={styledgrid} />
                    
                    <Route exact path="/AllLogic" component={AllLogic} />
                    <Route exact path="/createlogic" component={CreateLogic} />
                    <Route exact path="/CreateFromExistingTemplate" component={CreateFromExistingTemplate} />
                    <Route exact path="/RecentlyCreatedTemplates" component={RecentlyCreatedTemplates} />
                    {/* <Route exact component={NotFound} /> */}

                    <Route exact path="/fd" exact component={FullDialog} />
                    <Route exact path="/loading" exact component={LoadingSpiner} />                    
                    <Route exact path="/oldrecords" exact component={OldRecords} />
                    <Route exact path="/snack" exact component={SuccessSnackbar} />
                    

                </MainWrapper>
            </Switch>
        </HashRouter>
        );
}; 

export default App; 