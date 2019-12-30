import { combineReducers } from 'redux'; 
import authReducer from './authReducer'; 

import { clientsReducer, selectedClientReducer } from './clientsReducer'; 
import { recordsReducer, singleRecordReducer } from './recordsReducer'; 
import { fieldsReducer, singleFieldReducer } from './fieldsReducer'; 

export default combineReducers({
    clients: clientsReducer, 
    selectedClient: selectedClientReducer, 
    auth: authReducer, 
    records: recordsReducer,
    singleRecord:singleRecordReducer, 
    fields: fieldsReducer, 
    singleField:singleFieldReducer
});



