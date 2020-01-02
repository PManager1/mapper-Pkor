import React from 'react';
import { useSnackbar } from 'material-ui-snackbar-provider'; 
import Button from '@material-ui/core/Button';

export default function MyComponent (props) {
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
 
  return (<div>
        
      <Button onClick={handleSomething}> snackprovider </Button>
  </div>
    
  )
}