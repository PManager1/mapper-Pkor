import _ from 'lodash';
import {
  CREATE_FIELD,
  FETCH_FIELDS,
  FETCH_FIELD,
  EDIT_FIELD,
  DELETE_FIELD
} from '../actions/types'

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_FIELDS:
      return { ...state, ..._.mapKeys(action.payload, '_id') }
    case FETCH_FIELD:
      return { ...state, [action.payload._id]: action.payload }
    case CREATE_FIELD:
      return { ...state, [action.payload._id]: action.payload }
    case EDIT_FIELD:
      return { ...state, [action.payload._id]: action.payload }
    case DELETE_FIELD:
      return _.omit(state, action.payload)
    default:
      return state
  }
}


/*
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
        case 'FETCH_FIELD': 
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
*/
