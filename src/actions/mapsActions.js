import clients from '../apis/clients';

import {
    CREATE_MAP,
    FETCH_MAPS,
    FETCH_MAP, 
    EDIT_MAP, 
    DELETE_MAP
      } from './types'


export const createMap = (formValues) => async dispatch => {

    // var arr = [ "John", formValues ];
    // var myJSON = JSON.stringify(arr);

    var obj = { mapName: formValues };
    var myJSON = JSON.stringify(obj);

    console.log( ' createMap called wth myJSON = ', myJSON ); 
 
    console.log('16-  fomrValues = ', formValues )

    // debugger; 
    const response = await clients.post('/clients', { mapName: formValues } ); 
 
    dispatch ({  type: 'CREATE_CLIENT',   payload: response.data });
    };
