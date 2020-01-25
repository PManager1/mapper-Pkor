import React from 'react';
import Typography from '@material-ui/core/Typography';
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
  title: {
    flexGrow: 1,
    color: theme.palette.text.secondary,
  },
}));

export default function NewRecord(props) {
  const classes = useStyles();

  const { id } = props.match.params;

  // const { id } = this.props.match.params;
  console.log ( '28 - RecordsForm in NEw RECORD  = ',  id );

  return (
    <div className={classes.root}>
      <Typography variant="h5" component="h4" className={classes.title}>
          Create New Record & Or ( Associate with a DataSet )
          </Typography>
      <RecordsForm id={id} />
     </div>
  );
}






