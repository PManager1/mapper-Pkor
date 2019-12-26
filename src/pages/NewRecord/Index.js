import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import AlignmentRadioBtns  from '../../components/Inputs/AlignmentRadioBtns.js';
import RecordsForm from './RecordsForm.js'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function NewRecord() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <RecordsForm />
     </div>
  );
}


  
  
  
  
  