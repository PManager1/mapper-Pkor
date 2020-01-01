import clients from '../apis/clients';

import _ from 'lodash';
import {
  CREATE_LOGIC,
  FETCH_LOGICS,
  FETCH_LOGIC,
  EDIT_LOGIC,
  DELETE_LOGIC
} from './types'; 
  
export const createLogic =  () =>{
    console.log('13 -  createLogic  called'); 
    return async dispatch => {
    const response = await clients.get('/logics'); 
    console.log('6---  action fetchFields action response = ', response.data ); 

    dispatch ({  type: CREATE_LOGIC,   payload: response.data });
    }
};


export const fetchFields =  () =>{
    return async dispatch => {
    const response = await clients.get('/logics'); 
    console.log('6---  action fetchFields action response = ', response.data ); 

    dispatch ({  type: FETCH_LOGICS,   payload: response.data });
    }
};


export const fetchSingleField = (fieldID) =>{
console.log('15 ---  action fetchSingleField  fieldID = ', fieldID ); 
return async dispatch => {
    const response = await clients.get(`/logics/${fieldID}`); 
                                                 
    console.log('19 ---  action fetchSingleField  response = ', response.data ); 

    dispatch ({  type: FETCH_LOGIC,   payload: response.data });
    }
};

export const editField = (fieldID, formValues) =>{
    console.log('36-editField-action ---  fieldID = ', fieldID ); 
    console.log('37 ---  action editField   formValues = ', formValues ); 
    return async dispatch => {
        const response = await clients.put(`/logics/${fieldID}`, formValues); 
                                                     
        console.log('19 ---  action fetchSingleField  response = ', response.data ); 
    
        dispatch ({  type: EDIT_LOGIC,   payload: response.data });
        }
    };