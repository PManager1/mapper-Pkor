import _ from 'lodash';
import {
  CREATE_LOGIC,
  FETCH_LOGICS,
  FETCH_LOGIC,
  EDIT_LOGIC,
  DELETE_LOGIC
} from '../actions/types'

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_LOGICS:
      return { ...state, ..._.mapKeys(action.payload, 'id') }
    case FETCH_LOGIC:
      return { ...state, [action.payload.id]: action.payload }
    case CREATE_LOGIC:
      return { ...state, [action.payload.id]: action.payload }
    case EDIT_LOGIC:
      return { ...state, [action.payload.id]: action.payload }
    case DELETE_LOGIC:
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
