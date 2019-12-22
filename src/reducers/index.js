import { combineReducers } from 'redux'; 
import { clientsReducer, selectedClientReducer } from './clientsReducer'; 

export default combineReducers({
    clients: clientsReducer, 
    selectedClient: selectedClientReducer
});