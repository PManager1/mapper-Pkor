import clients from '../apis/local';



export const createClient = (formValues) => async dispatch => {

  console.log( ' 7 - createClient called with formValues= ', formValues );

  var obj = { clientName: formValues };
  var myJSON = JSON.stringify(obj);

  console.log( ' createMap called wth myJSON = ', myJSON );
  console.log('16-  fomrValues = ', formValues );

  // debugger;
  // const response = await clients.post('/maps', { mapName: formValues } );

  // console.log('22 -  response from createMap = ', response.data );

  // ls.clear();
  // ls.set('current_MapId', response.data._id);
  // ls.set('current_MapName', response.data.mapName);

  // dispatch ({  type: 'CREATE_MAP',   payload: response.data });

  // route to  records/5e2349f732266ae2947db7e1

  };




export const fetchClients = () => {
  console.log( '34 - fetchClients action  Called ' );
    return async dispatch => {
        const response = await clients.get('/clients');
        console.log('37 ---  action fetchClients  response = ', response.data );
        dispatch({
            type: 'FETCH_CLIENTS',
            payload: response.data
        });
    }
};


// export const fetchSingleClient = (clientID) => {
//     console.log('15 ---  action fetchSingleClient  clientID = ', clientID);
//     return async dispatch => {
//         const response = await clients.get(`/clients/${clientID}`);
//         // console.log('19 ---  action fetchClients  response = ', response.data );
//         dispatch({
//             type: 'FETCH_SINGLE_CLIENT',
//             payload: response.data
//         });
//     }
// };