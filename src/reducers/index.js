import { combineReducers } from 'redux'; 
import authReducer from './authReducer'; 

import { clientsReducer, selectedClientReducer } from './clientsReducer'; 

export default combineReducers({
    clients: clientsReducer, 
    selectedClient: selectedClientReducer, 
    auth: authReducer
});