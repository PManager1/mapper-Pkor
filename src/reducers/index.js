import { combineReducers } from 'redux'; 
import authReducer from './authReducer'; 

import { clientsReducer, selectedClientReducer } from './clientsReducer'; 
import { recordsReducer, selectedRecordReducer } from './recordsReducer'; 

export default combineReducers({
    clients: clientsReducer, 
    selectedClient: selectedClientReducer, 
    auth: authReducer, 
    records: recordsReducer
});