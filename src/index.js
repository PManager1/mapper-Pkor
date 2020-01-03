import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
import { Provider } from 'react-redux'; 
import { createStore, applyMiddleware } from 'redux'; 
import reducers from './reducers'; 
import thunk from 'redux-thunk'; 

import { SnackbarProvider } from 'notistack';

ReactDOM.render(
    <Provider store={createStore(reducers, applyMiddleware(thunk))}>
      <SnackbarProvider maxSnack={3} SnackbarProps={{ autoHideDuration: 500 }}>
      <App />
      </SnackbarProvider>
    </Provider>, 
        document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
