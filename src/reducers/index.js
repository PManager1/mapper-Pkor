import { combineReducers } from 'redux'; 

const clientsReducer = () => {
    return [
    { clientName: 'BlackBaud', clientId: 'BlackClientId-123423994', PayGroup: 'project-ID'  },
    { clientName: 'Shawshank Redemption', clientId: '1972', PayGroup: 'paygp'},
    { clientName: 'whiteBaud', clientId: '1974', PayGroup: 'paygp'  },
    { clientName: 'grewyBaud', clientId: '2008', PayGroup: 'paygp'  },
    { clientName: '12 Angry Men', clientId: '1957', PayGroup: 'paygp'  },
    { clientName: "Schindler's List", clientId: '1993', PayGroup: 'paygp'  },
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