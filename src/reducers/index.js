import { combineReducers } from 'redux'; 

const clientsReducer = () => {
    return [
        { clientName: 'blackbaud1', clientId: '123'}, 
        { clientName: 'yellowBaud1', clientId: '2323'}, 
        { clientName: 'whitebaud', clientId: '98343'}
    ]; 
}; 

const selectedClientReducer = (selectedClient=null, action) => {
    if( action.type === 'CLIENT_SELECTED' ){
        return action.payload; 
    }
    return selectedClient; 
}

export default combineReducers({
    clients: clientsReducer, 
    selectedClient: selectedClientReducer
});