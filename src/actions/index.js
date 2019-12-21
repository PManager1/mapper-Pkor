// Action creater 
export const selectClient = (clientID) =>{
    // return an action
    return {
        type: 'CLIENT_SELECTED', 
        payload: clientID
    };
}; 

