import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  HashRouter
} from "react-router-dom";

import NewFields from "./pages/NewField/Index.js";
import NewRecord from "./pages/NewRecord/Index.js";
import Search from "./pages/Search/Index.js";
import MainWrapper from "./pages/Records/MainWrapper";

import ClientSearch from "./pages/ClientSearch/Index.js";

import clientSearchResult from "./pages/ClientSearch/ClientSearchResult.js";


import Settings from "./pages/MapSettings/Index";

import CreateLogic from "./pages/CreateNewLogic/Index";

import CreateFromExistingTemplate from "./pages/Maps/CreateFromExistingTemplate/Index";
import CreateNewMap from "./pages/Maps/CreateNewMap/Index";

import RecentlyCreatedTemplates from "./pages/RecentlyCreatedTemplates/Index";
import Login from "./pages/Login/Index.js";
import NotFound from "./pages/NotFound/Index.js";

import ModalFormDialog from "./components/ModalFormDialog.js";
import { selectClient } from "./actions";

import LinearIndeterminate from "./components/LinearProgress.js";

import Later from "./pages/Later/Index.js";

import Records from "./pages/Records/Index.js";
import EditRecords from "./pages/EditRecords/Index.js";

import FullWidthGrid from "./pages/Example/Grid.js";

import styledgrid from "./pages/Example/styledgrid.js";
import LoadingSpiner from "./pages/Example/Loading.js";
import RulePicker from "./pages/Records/RulePicker.js";
import FullDialog from "./pages/Records/FullDialogInForm.js";
import ShowSnackbar from "./pages/Example/ShowSnackbar.js";
import WithNotistack from "./pages/Example/WithNotistack.js";


import ColorlibStepIcon from './pages/Example/stepperExample.js';
import StepperOneET from "./pages/Maps/CreateFromExistingTemplate/Steps/StepperOneET.js";
import StepperTwoET from "./pages/Maps/CreateFromExistingTemplate/Steps/StepperTwoET.js";
import StepperThreeET from "./pages/Maps/CreateFromExistingTemplate/Steps/StepperThreeET.js";
import StepperFourET from "./pages/Maps/CreateFromExistingTemplate/Steps/StepperFourET.js";

import StepperOneNT from "./pages/Maps/CreateNewMap/Steps/StepperOneNT.js";
import StepperTwoNT from "./pages/Maps/CreateNewMap/Steps/StepperTwoNT.js";
import StepperThreeNT from "./pages/Maps/CreateNewMap/Steps/StepperThreeNT.js";
import StepperFourNT from "./pages/Maps/CreateNewMap/Steps/StepperFourNT.js";
import AddClientToMap from "./pages/AddClientToMap/Index";

// CLIENTS
import CreateClient from "./pages/CreateClient/Index";

import CreateClientStepperOneNT from "./pages/CreateClient/Steps/CreateClientStepperOneNT.js";

import CreateClientStepperTwoNT from "./pages/CreateClient/Steps/CreateClientStepperTwoNT.js";

import ClientsWithMaps from "./pages/ClientsWithMaps/ClientsWithMaps.js";


import Rebass from "./pages/Example/Rebass.js";
import PickMapSelect from "./pages/Records/RecordsForm/PickMapSelect.js";

import LoadingScreen from "./pages/Example/LoadingScreen.js";
import StickyFooter from "./pages/Example/StickyFooter.js";

import FieldOptions from "./pages/Example/FieldOptions/Index";

import RadioSelectionComponent from "./pages/Example/FieldOptions/RadioSelectionComponent";

import ToggleRadio from "./pages/Example/ToggleRadio/ToggleRadio.js";

// New
import TemporaryDrawer from './TemporaryDrawer';
// import MainWrapper from "./pages/Records/MainWrapper";



  export default function App() {
    return (
      <HashRouter>
          <MainWrapper>
          <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/search" component={Search} />


          <Route exact path="/records" exact component={Records} />
          <Route exact path="/records/:id" component={Records} />

          <Route exact path="/newrecord" component={NewRecord} />
          <Route exact path="/newrecord/:id" component={NewRecord} />

          <Route exact path="/newField" component={NewFields} />
          <Route exact path="/newfield/:id" component={NewFields} />
          <Route exact path="/newfield/:id/:recordId" component={NewFields} />

          <Route exact path="/editrecords" component={EditRecords} />
          <Route exact path="/editrecords/:id" component={EditRecords} />

          <Route exact path="/grid" exact component={FullWidthGrid} />
          <Route exact path="/styledgrid" exact component={styledgrid} />

          <Route exact path="/settings" component={Settings} />
          <Route exact path="/CreateClient" component={CreateClient} />
          <Route exact path="/AddClientToMap" component={AddClientToMap} />


          <Route exact path="/CreateClientStepperOneNT" component={CreateClientStepperOneNT} />

          <Route exact path="/CreateClientStepperTwoNT/:clientName" component={CreateClientStepperTwoNT} />

          <Route exact path="/clientsearch" component={ClientSearch} />

          <Route exact path="/clientsearchresult/:id" component={clientSearchResult} />

          <Route exact path="/createlogic" component={CreateLogic} />
          <Route exact path="/CreateFromExistingTemplate" component={CreateFromExistingTemplate}
          />
          <Route exact path="/RecentlyCreatedTemplates" component={RecentlyCreatedTemplates}
          />

          <Route exact path="/ClientsWithMaps" component={ClientsWithMaps} />


          <Route exact path="/fd" exact component={FullDialog} />
          <Route exact path="/loading" exact component={LoadingSpiner} />


          <Route exact path="/showsnack" exact component={ShowSnackbar} />
          <Route exact path="/withnoti" exact component={WithNotistack} />
          <Route exact path="/stepperoneET" exact component={StepperOneET} />
          <Route exact path="/steppertwoET" exact component={StepperTwoET} />
          <Route exact path="/stepperthreeET" component={StepperThreeET} />
          <Route exact path="/stepperfourET" exact component={StepperFourET} />
          <Route exact path="/stepperoneNT" exact component={StepperOneNT} />
          <Route exact path="/steppertwoNT" exact component={StepperTwoNT} />
          <Route exact path="/stepperthreeNT" component={StepperThreeNT} />
          <Route exact path="/stepperfourNT" exact component={StepperFourNT} />
          <Route exact path="/rebass" exact component={Rebass} />
          <Route exact path="/pickmapselect" exact component={PickMapSelect} />
          <Route exact path="/ModalFormDialog" component={ModalFormDialog} />
          <Route exact path="/login" exact component={Login} />
          <Route exact path="/ls" exact component={LoadingScreen} />
          <Route exact path="/sfoo" exact component={StickyFooter} />
          <Route exact path="/fo" exact component={FieldOptions} />
          <Route exact path="/rsc" exact component={RadioSelectionComponent} />
          <Route exact path="/tr" exact component={ToggleRadio} />

          <Route exact path="/se" exact component={ColorlibStepIcon} />



          <Route component={NotFound} />
          </Switch>
        </MainWrapper>
    </HashRouter>
  );
};