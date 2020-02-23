
import React from 'react';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green, purple, red } from '@material-ui/core/colors';



const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
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
    color: '#00B3F0',
  },
  deleteBtn: {
    marginLeft: 'auto',
    marginRight: 40,
    color: '#F15A29',
  },
}));



export default function CancelDeleteButtons() {
  const classes = useStyles();

  return (
    <div className={classes.parent}>
      <br />
      <div className={classes.child}>
        <Button className={classes.cancelBtn}>Cancel</Button>
        <Button className={classes.deleteBtn}>Delete</Button>
        <Button variant="contained" color="primary" className={classes.margin}>
          Save
            </Button>
      </div>
    </div>


  );
}
