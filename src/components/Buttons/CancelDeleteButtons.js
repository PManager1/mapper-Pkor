import React from 'react';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green, purple, red } from '@material-ui/core/colors';
import { useHistory } from "react-router-dom";


const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
    textTransform: 'none',
    backgroundColor: '#00B3F0',
    '&:hover': {
      backgroundColor: '#00B3F0',
      borderColor: '#00B3F0',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#00B3F0',
      borderColor: '#00B3F0',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
  parent: {
    display: 'flex',
  },
  child: {
    marginLeft: 'auto',
    order: '2',
    marginRight: 10,
  },
  saveCancelBtn: {
    marginLeft: 'auto',
    marginRight: 40,
    color: '#F15A29',
  },
  cancelBtn: {
    marginLeft: 'auto',
    marginRight: 40,
    color: '#007BB5',
    textTransform: 'none',
  },
  deleteBtn: {
    marginLeft: 'auto',
    marginRight: 40,
    color: '#F15A29',
    textTransform: 'none',
  },
}));


export default function CancelDeleteButtons(props) {
  const classes = useStyles();
  let history = useHistory();
  console.log(' 55 - CancelDeleteBussons props = ', props);


  return (
    <div className={classes.parent}>
      <br />
      <div className={classes.child}>
        <Button className={classes.cancelBtn}
                onClick={(e) => props.handleCancelClick()}>Cancel</Button>
        <Button className={classes.deleteBtn}
                onClick={(e) => props.handleDeleteBtn()}> Delete</Button>
        <Button variant="contained" color="primary" className={classes.margin}
                onClick={(e) => props.handleSaveClick()}>Save</Button>
      </div>
    </div>


  );
}
