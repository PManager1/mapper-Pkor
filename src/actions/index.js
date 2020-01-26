import clients from '../apis/local';
//formValues

export * from './recordsActions';
export * from './authActions';
export * from './fieldsActions';
export * from './logicActions';
export * from './clientsActions';
export * from './mapsActions';


// import { showLoading, hideLoading } from 'actions/index.js';

export const showLoading = () =>{
    return {
        type: 'SHOW_LOADING'
    }
}

export const hideLoading = () =>{
    return {
        type: 'HIDE_LOADING'
    }
}




