import {
    SNACKBAR_SUCCESS,
    SNACKBAR_CLEAR,
  } from '../actions/types'; 
  

  export default (state = {}, action) => {
    switch (action.type) {
      case SNACKBAR_SUCCESS:
        return {
          ...state,
          successSnackbarOpen: true,
          successSnackbarMessage: action.message
        };
      case SNACKBAR_CLEAR:
        return {
          ...state,
          successSnackbarOpen: false,
          errorSnackbarOpen: false,
          infoSnackbarOpen: false
        };
      default:
        return state;
    }
  };
  

// import _ from 'lodash';
// import {
//   CREATE_LOGIC,
//   FETCH_LOGICS,
//   FETCH_LOGIC,
//   EDIT_LOGIC,
//   DELETE_LOGIC
// } from '../actions/types'

// export default (state = {}, action) => {
//   switch (action.type) {
//     case FETCH_LOGICS:
//       return { ...state, ..._.mapKeys(action.payload, '_id') }
//     case FETCH_LOGIC:
//       return { ...state, [action.payload._id]: action.payload }
//     case CREATE_LOGIC:
//       return { ...state, [action.payload._id]: action.payload }
//     case EDIT_LOGIC:
//       return { ...state, [action.payload._id]: action.payload }
//     case DELETE_LOGIC:
//       return _.omit(state, action.payload)
//     default:
//       return state
//   }
// }

