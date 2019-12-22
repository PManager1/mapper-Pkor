// import jsonPlaceholder from '../apis/jsonPlaceholder'; 
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchClients =  () =>{
    return async dispatch => {
    const response = await jsonPlaceholder.get('/clients'); 
    console.log('7 ---  action fetchClients  response = ', response.data ); 

    dispatch ({  type: 'FETCH_CLIENTS',   payload: response.data });
    }
};


export const fetchSingleClient = (clientID) =>{
console.log('15 ---  action fetchSingleClient  clientID = ', clientID ); 
return async dispatch => {
    const response = await jsonPlaceholder.get(`/clients/${clientID}`); 
                                                 
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
