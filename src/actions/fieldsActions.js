import clients from '../apis/clients';
import _ from 'lodash';

import {
    CREATE_FIELD,
    FETCH_FIELDS,
    FETCH_FIELD,
    EDIT_FIELD,
    DELETE_FIELD
  } from '../actions/types'


  export const editField = (fieldID, formValues) =>{
    console.log('36-editField-action ---  fieldID = ', fieldID );
    console.log('37 ---  action editField   formValues = ', formValues );
    return async dispatch => {
        const response = await clients.put(`/fieldlist/${fieldID}`, formValues);

        console.log('19 ---  action fetchSingleField  response = ', response.data );

        dispatch ({  type: EDIT_FIELD,   payload: response.data });


        }
    };




  export const createField =  (formValues) =>{
    console.log('12--- createField action= ', formValues );

    return async dispatch => {
    const response = await clients.post('/fieldlist', { ...formValues} );

    console.log('22---  action createField action response = ', response.data );

    dispatch ({  type: CREATE_FIELD,   payload: response.data });
    }
};


  export const deleteField =  (fieldID) => async dispatch => {
    console.log('13- - deleteField-action ---  fieldID = ', fieldID );
    const response = await clients.delete(`/fieldlist/${fieldID}`);

    dispatch ({  type: 'DELETE_FIELD',   payload: fieldID });
    };




export const fetchFields =  (id) =>{
    return async dispatch => {
    const response = await clients.get('/fieldlist');
    console.log('6---  action fetchFields action response = ', response.data );


    // const recordsWithId = _.filter(response.data.data, function(o) { return o.MapId === "5e1445d5f6082f8375a04411" });
    // console.log('36 ---  action fieldsWithId = ', recordsWithId );

    const recordsWithId = _.filter(response.data.data, function(o) { return o.MapId ===  id });
    console.log('36 ---  action recordsWithId = ', recordsWithId );

    // const sortedArray = response.data.data.sort((a, b) => (a.SequenceNumber > b.SequenceNumber) ? 1 : -1)
    const sortedArray = recordsWithId.sort((a, b) => (a.SequenceNumber > b.SequenceNumber) ? 1 : -1)

    dispatch ({  type: FETCH_FIELDS,   payload: sortedArray });
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

