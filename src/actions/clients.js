const createClient = (name, clientId ) =>{
    return {
        type: 'CREATE_CLIENT', 
        payload: {
            clientName,
            clientId 
        }
    }; 
}; 

const deleteClient = (name, clientId ) =>{
    return {
        type: 'DELETE_CLIENT', 
        payload: {
            name,
            clientId 
        }
    }; 
}; 

//Reducers ( like our Departments )

const listAllClients = ( listOfClients = [] , action ) =>{
    if (action.type === 'CREATE_CLIENT'){
        return [...listOfClients, action.payload.name]
    }else if (action.type==='DELETE_CLIENT'){
        return [...listOfClients]; // you need to delete it. 
    }
}