export const clientsReducer = ( state = [], action ) => {

    switch(action.type) {
        case 'FETCH_POSTS': 
            return action.payload; 
        default: 
            return state; 
    } 
}; 

export const selectedClientReducer = (selectedClient=null, action) => {
    if( action.type === 'CLIENT_SELECTED' ){
        return action.payload; 
    }
    return selectedClient; 
}


// export default = () =>{
//     return '123'; 
// }