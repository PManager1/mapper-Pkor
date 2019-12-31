import clients from '../apis/clients';

import {
    CREATE_FIELD,
    FETCH_FIELDS,
    FETCH_FIELD,
    EDIT_FIELD,
    DELETE_FIELD
  } from '../actions/types'
  

  

export const fetchFields =  () =>{
    return async dispatch => {
    const response = await clients.get('/fieldlist'); 
    console.log('6---  action fetchFields action response = ', response.data ); 

    dispatch ({  type: FETCH_FIELDS,   payload: response.data });
    }
};


export const fetchSingleField = (fieldID) =>{
console.log('15 ---  action fetchSingleField  fieldID = ', fieldID ); 
return async dispatch => {
    const response = await clients.get(`/fieldlist/${fieldID}`); 
                                                 
    console.log('19 ---  action fetchSingleField  response = ', response.data ); 

    dispatch ({  type: FETCH_FIELD,   payload: response.data });
    }
};

export const editField = (fieldID, formValues) =>{
    console.log('25 ---  action editField   fieldID = ', fieldID ); 
    console.log('26 ---  action editField   formValues = ', formValues ); 
    return async dispatch => {
        const response = await clients.put(`/fieldlist/${fieldID}`, formValues); 
                                                     
        console.log('19 ---  action fetchSingleField  response = ', response.data ); 
    
        dispatch ({  type: 'EDIT_FIELD',   payload: response.data });
        }
    };