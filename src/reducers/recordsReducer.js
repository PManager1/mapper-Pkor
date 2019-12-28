export const recordsReducer = ( state = [], action ) => {

    switch(action.type) {
        case 'FETCH_RECORDS': 
            return action.payload; 
        default: 
            return state; 
    } 
}; 

export const selectedRecordReducer = ( state = [], action) => {
    switch(action.type) {
        case 'FETCH_SINGLE_RECORD': 
            return action.payload; 
        default: 
            return state; 
    } 
}


// export default = () =>{
//     return '123'; 
// }