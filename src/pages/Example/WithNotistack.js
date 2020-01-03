import React from 'react'; 
import Button from '@material-ui/core/Button';
import { useSnackbar } from 'notistack';
// import { SnackbarProvider, useSnackbar } from 'notistack';


const WithNotistack = () => {
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const handleClickVariant = variant => () => {
        // variant could be success, error, warning, info, or default
        enqueueSnackbar('This is a success message!', { variant });
      };

    const handleClick = () => {
        enqueueSnackbar('I love hooks');

    };

    return (
        <React.Fragment>
            <Button onClick={handleClick}>Show snackbar</Button>
            <Button onClick={handleClickVariant('success')}>Show success snackbar</Button>
        </React.Fragment>
    );
}

export default WithNotistack; 


/*
 https://iamhosseindhv.com/notistack
*/