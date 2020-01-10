import clients from '../apis/clients';
import _ from 'lodash';

import {
CREATE_RECORD,
FETCH_RECORDS,
FETCH_RECORD, 
EDIT_RECORD, 
DELETE_RECORD
  } from './types'

export const fetchRecords =  (id) =>{
    console.log('13---fetchRecords action fetching records for ID = ', id ); 
    return async dispatch => {
    const response = await clients.get('/records'); 
    // console.log('16 ---  action fetchRecords  response = ', response.data ); 
    const recordsWithId = _.filter(response.data.data, function(o) { return o.MapId === id });
    console.log('18 ---  action recordsWithId = ', recordsWithId );     


    // const sortedArray = response.data.data.sort((a, b) => (a.SequenceNumber > b.SequenceNumber) ? 1 : -1)
    const sortedArray = recordsWithId.sort((a, b) => (a.SequenceNumber > b.SequenceNumber) ? 1 : -1)
    //   let arrr =   sortArr(response.data)
    console.log('24 ---  action fetchRecords  sortedArray = ', sortedArray ); 

    dispatch ({  type: 'FETCH_RECORDS',   payload: sortedArray });
    }
};

export const deleteRecord =  (recID) => async dispatch => {
    console.log('13- - deleteField-action ---  recID = ', recID ); 
    const response = await clients.delete(`/records/${recID}`); 

    dispatch ({  type: 'DELETE_FIELD',   payload: recID });
    };


export const createRecord =  (formValues) =>{
    console.log('30--- createRecord action= ', formValues ); 
    
    return async dispatch => {
    const response = await clients.post('/records', { ...formValues} ); 
    
    console.log('34---  action createLogic action response = ', response.data ); 
    
    dispatch ({  type: CREATE_RECORD,   payload: response.data });
    }
};



export const editRecord = (fieldID, formValues) =>{
        // console.log('31-editRecord-action ---  fieldID = ', fieldID ); 
        // console.log('32 ---  action editRecord   formValues = ', formValues ); 
        return async dispatch => {
            const response = await clients.put(`/records/${fieldID}`, formValues); 
            
            // console.log('36 ---  action editRecord  response = ', response.data ); 
            dispatch ({  type: EDIT_RECORD,   payload: response.data });
            }
        };
    
    


export const fetchSingleRecord = (recordID) =>{

// console.log('15 ---  action fetchSingleRecord  recordID = ', recordID ); 
return async dispatch => {
    const response = await clients.get(`/fieldlist/${recordID}`); 
                                                 
    console.log('19 ---  action fetchClients  response = ', response.data ); 

    dispatch ({  type: 'FETCH_SINGLE_RECORD',   payload: response.data });
    }
};