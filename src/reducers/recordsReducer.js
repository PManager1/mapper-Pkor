import _ from 'lodash';
import {
  CREATE_RECORD,
  FETCH_RECORDS,
  FETCH_RECORD,
  EDIT_RECORD,
  DELETE_RECORD
} from '../actions/types'

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_RECORDS:
      return { ...state, ..._.mapKeys(action.payload, 'id') }
    case FETCH_RECORD:
      return { ...state, [action.payload.id]: action.payload }
    case CREATE_RECORD:
      return { ...state, [action.payload.id]: action.payload }
    case EDIT_RECORD:
      return { ...state, [action.payload.id]: action.payload }
    case DELETE_RECORD:
      return _.omit(state, action.payload)
    default:
      return state
  }
}

export const recordsReducer = ( state = [], action ) => {

    switch(action.type) {
        case 'FETCH_RECORDS': 
            return action.payload; 
        default: 
            return state; 
    } 
}; 

/*


export const singleRecordReducer= ( state = [], action) => {
    switch(action.type) {
        case 'FETCH_SINGLE_RECORD': 
            return action.payload; 
        default: 
            return state; 
    } 
}

*/