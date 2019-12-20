import React from 'react';
import LoginTop from './LoginTop.js'; 
import MySnackbarContentWrapper from './MySnackbarContentWrapper'; 
import CurrentMenu from './CurrentMenu.js'; 

export default function Index() {

  return (
    <div >
          {/* <CurrentMenu /> */}

          <br/>  <br/><br/>  <br/>
            <LoginTop />
            <br/>  <br/><br/>  <br/>
            <CurrentMenu />
            
            <MySnackbarContentWrapper />


            
    </div>
  );
}
