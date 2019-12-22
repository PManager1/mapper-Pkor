// import jsonPlaceholder from '../apis/jsonPlaceholder'; 
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchClients =  () =>{
    return async dispatch => {
    const response = await jsonPlaceholder.get('/posts'); 
    
    dispatch ({  type: 'FETCH_POSTS',   payload: response  });
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


