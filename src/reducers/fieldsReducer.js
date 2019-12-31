export const fieldsReducer = ( state = [], action ) => {

    switch(action.type) {
        case 'FETCH_FIELDS': 
            return action.payload; 
        default: 
            return state; 
    } 
}; 

export const singleFieldReducer= ( state = [], action) => {
    switch(action.type) {
        case 'FETCH_SINGLE_FIELD': 
            return action.payload; 
        default: 
            return state; 
    } 
}


export const fieldReducer = ( state = {}, action ) => {

    switch(action.type) {
        case 'EDIT_FIELDS': 
            // const newState = { ...state }; 
            // newState[action.payload.id] = action.payload;
            // return newState; 

            return { ...state, [action.payload.id]: action.payload };
        default: 
            return state; 
    } 
}; 

