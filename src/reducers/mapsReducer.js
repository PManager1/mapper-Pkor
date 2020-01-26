export const mapsReducer = ( state = [], action ) => {

  switch(action.type) {
      case 'FETCH_MAPS':
          return action.payload;
      default:
          return state;
  }
};

// export const selectedClientReducer = ( state = [], action) => {
//   switch(action.type) {
//       case 'FETCH_SINGLE_MAP':
//           return action.payload;
//       default:
//           return state;
//   }
// }

