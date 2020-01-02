import clients from '../apis/clients';

import _ from 'lodash';
import {
  CREATE_LOGIC,
  FETCH_LOGICS,
  FETCH_LOGIC,
  EDIT_LOGIC,
  DELETE_LOGIC
} from './types'; 


// export const createStream = formValues => async (dispatch, getState) => {
//     const { userId } = getState().auth
//     const response = await streams.post('/streams', { ...formValues, userId })
  
//     dispatch({ type: CREATE_STREAM, payload: response.data })
//     history.push('/')
//   }


export const fetchLogics =  () =>{
    console.log('35---  action fetchLogics action response'); 

    return async dispatch => {
    const response = await clients.get('/logics'); 
    console.log('6---  action fetchFields action response = ', response.data ); 
    dispatch ({  type: FETCH_LOGICS,   payload: response.data.data });
    }
};


export const createLogic =  (formValues) =>{
    console.log('23--- createLogic action= ', formValues ); 
    
    return async dispatch => {
    const response = await clients.post('/logics', { ...formValues} ); 
    console.log('6---  action createLogic action response = ', response.data ); 

    dispatch ({  type: CREATE_LOGIC,   payload: response.data });
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