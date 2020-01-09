import ls from 'local-storage';

import clients from '../apis/clients';
import {
    CREATE_MAP,
    FETCH_MAPS,
    FETCH_MAP, 
    EDIT_MAP, 
    DELETE_MAP
      } from './types'


export const createMap = (formValues) => async dispatch => {

    var obj = { mapName: formValues };
    var myJSON = JSON.stringify(obj);

    console.log( ' createMap called wth myJSON = ', myJSON ); 
    console.log('16-  fomrValues = ', formValues ); 

    // debugger; 
    const response = await clients.post('/clients', { mapName: formValues } ); 
    
    console.log('22 -  response from createMap = ', response.data ); 
    
    // ls.clear();
    ls.set('currentMap', response.data); 
    dispatch ({  type: 'CREATE_CLIENT',   payload: response.data });
    };
