import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
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
  title: {
    flexGrow: 1,
    color: theme.palette.text.secondary,
  },
}));

export default function NewFields(props) {
  const classes = useStyles();
  const { id } = props.match.params; 

  return (
    <div className={classes.root}>
      <Typography variant="h5" component="h4" className={classes.title}>
          Create New Field
          </Typography>
      <RecordsForm id={id} />
     </div>
  );
}


  
  
  
  
  
  
  