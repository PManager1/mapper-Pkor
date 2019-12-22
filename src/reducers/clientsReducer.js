export const clientsReducer = ( state = [], action ) => {

    switch(action.type) {
        case 'FETCH_CLIENTS': 
            return action.payload; 
        default: 
            return state; 
    } 
}; 

export const selectedClientReducer = ( state = [], action) => {
    switch(action.type) {
        case 'FETCH_SINGLE_CLIENT': 
            return action.payload; 
        default: 
            return state; 
    } 
}


// export default = () =>{
//     return '123'; 
// }