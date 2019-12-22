import clients from '../apis/clients';
//formValues
export const createClient =  () => async dispatch => {
    const response = await clients.post('/clients' ); 
    
    // console.log('8 ---  action createClient  response = ', response.data ); 
    // dispatch ({  type: 'CREATE_CLIENT',   payload: response.data });
    };





export const fetchClients =  () =>{
    return async dispatch => {
    const response = await clients.get('/clients'); 
    console.log('7 ---  action fetchClients  response = ', response.data ); 

    dispatch ({  type: 'FETCH_CLIENTS',   payload: response.data });
    }
};


export const fetchSingleClient = (clientID) =>{
console.log('15 ---  action fetchSingleClient  clientID = ', clientID ); 
return async dispatch => {
    const response = await clients.get(`/clients/${clientID}`); 
                                                 
    console.log('19 ---  action fetchClients  response = ', response.data ); 

    dispatch ({  type: 'FETCH_SINGLE_CLIENT',   payload: response.data });
    }
};


// Action creater 
// export const selectClient = (clientID) =>{
//     // return an action
//     return {
//         type: 'CLIENT_SELECTED', 
//         payload: clientID
//     };
// }; 
