// import jsonPlaceholder from '../apis/jsonPlaceholder'; 
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchClients =  () =>{
    return async dispatch => {
    const response = await jsonPlaceholder.get('/clients'); 
    console.log('7 ---  action fetchClients  response = ', response.data ); 

    dispatch ({  type: 'FETCH_POSTS',   payload: response.data });
    }
};



// Action creater 
export const selectClient = (clientID) =>{
    // return an action
    return {
        type: 'CLIENT_SELECTED', 
        payload: clientID
    };
}; 


