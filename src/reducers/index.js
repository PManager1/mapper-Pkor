import { combineReducers } from 'redux'; 
import authReducer from './authReducer'; 

import { clientsReducer, selectedClientReducer } from './clientsReducer'; 

import { recordsReducer } from './recordsReducer'; 
// import recordsReducer from './recordsReducer'; 

import snackbarReducer from './snackbarReducer.js'; 


// import { fieldsReducer, singleFieldReducer } from './fieldsReducer'; 
import fieldsReducer from './fieldsReducer'; 
import logicReducer from './logicReducer'; 

export default combineReducers({
    clients: clientsReducer, 
    selectedClient: selectedClientReducer, 
    auth: authReducer, 
    records: recordsReducer,
    // singleRecord:singleRecordReducer, 
    fields: fieldsReducer, 
    logics: logicReducer,
    snackbar:snackbarReducer
    // singleField:singleFieldReducer
});



