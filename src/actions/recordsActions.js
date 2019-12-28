import clients from '../apis/clients';

export const fetchRecords =  () =>{
    return async dispatch => {
    const response = await clients.get('/records'); 
    console.log('4 ---  action fetchRecords  response = ', response.data ); 

    dispatch ({  type: 'FETCH_RECORDS',   payload: response.data });
    }
};


export const fetchSingleRecord = (recordID) =>{
console.log('12 ---  action fetchSingleRecord  recordID = ', recordID ); 
return async dispatch => {
    const response = await clients.get(`/records/${recordID}`); 
                                                 
    console.log('19 ---  action fetchClients  response = ', response.data ); 

    dispatch ({  type: 'FETCH_SINGLE_RECORD',   payload: response.data });
    }
};