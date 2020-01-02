import clients from '../apis/clients';

import {
CREATE_RECORD,
FETCH_RECORDS,
FETCH_RECORD, 
EDIT_RECORD, 
DELETE_RECORD
  } from './types'


  
export const fetchRecords =  () =>{
    return async dispatch => {
    const response = await clients.get('/records'); 
    console.log('4 ---  action fetchRecords  response = ', response.data ); 

    dispatch ({  type: 'FETCH_RECORDS',   payload: response.data });
    }
};

export const editRecord = (fieldID, formValues) =>{
        console.log('36-editField-action ---  fieldID = ', fieldID ); 
        console.log('37 ---  action editField   formValues = ', formValues ); 
        return async dispatch => {
            const response = await clients.put(`/records/${fieldID}`, formValues); 
            
            console.log('19 ---  action fetchSingleField  response = ', response.data ); 
            dispatch ({  type: EDIT_RECORD,   payload: response.data });
            }
        };
    
    


export const fetchSingleRecord = (recordID) =>{

console.log('15 ---  action fetchSingleRecord  recordID = ', recordID ); 
return async dispatch => {
    const response = await clients.get(`/fieldlist/${recordID}`); 
                                                 
    console.log('19 ---  action fetchClients  response = ', response.data ); 

    dispatch ({  type: 'FETCH_SINGLE_RECORD',   payload: response.data });
    }
};