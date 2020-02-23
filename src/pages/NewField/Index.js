import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import RecordsForm from './RecordsForm.js'
import Divider from '@material-ui/core/Divider';

import CancelDeleteButtons from '../../components/Buttons/CancelDeleteButtons';

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
    marginBottom: 15,
  },
}));

export default function NewFields(props) {
  const classes = useStyles();
  // const { id } = props.match.params;
  console.log ( '25 - NewField -  props.match.params= ',  props.match.params );
  const { id } = props.match.params;
  const { recordId } = props.match.params;

  console.log ( '28 - NewField -  recordId= ',  recordId );
  console.log ( '31 - NewField - id= ',  id );

  return (
    <div className={classes.root}>
      <Typography variant="h5" component="h4" className={classes.title}>
            Create a new field
          </Typography>
      <RecordsForm recordId={recordId} id={id} />

<br/><br/>
      <Divider />
      <CancelDeleteButtons />

     </div>
  );
}








