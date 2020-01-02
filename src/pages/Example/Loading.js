import React, { Component } from 'react';
import { usePromiseTracker } from "react-promise-tracker";
 
import { Spinner } from '../../components/common/components/spinner/spinner.js';

// new 
import { useSnackbar } from 'material-ui-snackbar-provider'; 
import Button from '@material-ui/core/Button';

const LoadingSpiner = (props) => {
 
  const snackbar = useSnackbar()
 
  const handleSomething = () => {
    snackbar.showMessage(
      'Something happened!',
      'Undo', () => handleUndo()
    )
  }

  const handleUndo = () => {
    // *snip*
  }


  return (
    <div>
        some loading info
        <Spinner />

        <Button onClick={handleSomething}> snackprovider </Button>

  </div>
  )
};

export default LoadingSpiner; 