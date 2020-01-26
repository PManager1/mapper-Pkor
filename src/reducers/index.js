import { combineReducers } from 'redux';
import authReducer from './authReducer';

import { clientsReducer, selectedClientReducer } from './clientsReducer';

import { mapsReducer } from './mapsReducer';
import { recordsReducer } from './recordsReducer';
// import recordsReducer from './recordsReducer';

// import { fieldsReducer, singleFieldReducer } from './fieldsReducer';
import fieldsReducer from './fieldsReducer';
import logicReducer from './logicReducer';

export default combineReducers({
    clients: clientsReducer,
    maps: mapsReducer,
    selectedClient: selectedClientReducer,
    auth: authReducer,
    records: recordsReducer,
    // singleRecord:singleRecordReducer,
    fields: fieldsReducer,
    logics: logicReducer
    // singleField:singleFieldReducer
});



