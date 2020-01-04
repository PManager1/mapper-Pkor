import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '40px',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function NameInput() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

        <TextField
          id="standard-full-width"
          label="Map Name"
          style={{ margin: 8 }}
          placeholder="ABC Map"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />


      
    </div>
  );
}
