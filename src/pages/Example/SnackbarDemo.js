import React from 'react'; 
import { useDispatch, useSelector } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import { Icon } from "@material-ui/core";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";

import { clearSnackbar } from '../../actions'; 

export default function SuccessSnackbar() {
  const dispatch = useDispatch();

//   const { successSnackbarMessage, successSnackbarOpen } = useSelector(
//     state => state.ui
//   );

  function handleClose() {
    dispatch(clearSnackbar());
  }

  return (<div>
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left"
      }}
    //   open={successSnackbarOpen}
      autoHideDuration={4000}
      onClose={handleClose}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar">
          <Icon>check_circle</Icon>
          {/* {successSnackbarMessage} */}
        </span>
      }
      action={[
        <IconButton
          key="close"
          aria-label="close"
          color="inherit"
          onClick={handleClose}
        >
          <Icon>close</Icon>
        </IconButton>
      ]}
    />
    <Button>
        snack button
    </Button>
    
    </div>);
}