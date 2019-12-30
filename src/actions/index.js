import clients from '../apis/clients';
//formValues

export * from './recordsActions';
export * from './authActions';
export * from './fieldsActions';

// import { showLoading, hideLoading } from 'actions/index.js';

export const showLoading = () =>{
    return {
        type: 'SHOW_LOADING'
    }
}

export const hideLoading = () =>{
    return {
        type: 'HIDE_LOADING'
    }
}






export const createClient =  (formValues) => async dispatch => {
    // console.log('4 --- inside  action createClient  formValues = ', formValues); 
    const response = await clients.post('/fieldlist', formValues ); 

    // console.log('7 ---  action createClient  response = ', response ); 
    // console.log('8 ---  action createClient  response.data = ', response.data ); 
    dispatch ({  type: 'CREATE_CLIENT',   payload: response.data });
    };


export const editClient =  (formValues, clientID) => async dispatch => {
    // console.log('4 --- inside  action createClient  formValues = ', formValues); 
    const response = await clients.put(`/clients/${clientID}`, formValues); 

    // console.log('7 ---  action createClient  response = ', response ); 
    // console.log('8 ---  action createClient  response.data = ', response.data ); 
    dispatch ({  type: 'EDIT_CLIENT',   payload: response.data });
    };


export const deleteClient =  (clientID) => async dispatch => {
    const response = await clients.delete(`/clients/${clientID}`); 

    dispatch ({  type: 'DELETE_CLIENT',   payload: clientID });
    };
    



export const fetchClients =  () =>{
    return async dispatch => {
    const response = await clients.get('/clients'); 
    // console.log('7 ---  action fetchClients  response = ', response.data ); 

    dispatch ({  type: 'FETCH_CLIENTS',   payload: response.data });
    }
};


export const fetchSingleClient = (clientID) =>{
console.log('15 ---  action fetchSingleClient  clientID = ', clientID ); 
return async dispatch => {
    const response = await clients.get(`/clients/${clientID}`); 
                                                 
    // console.log('19 ---  action fetchClients  response = ', response.data ); 

    dispatch ({  type: 'FETCH_SINGLE_CLIENT',   payload: response.data });
    }
};

