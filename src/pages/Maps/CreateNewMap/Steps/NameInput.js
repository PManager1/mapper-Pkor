import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import ls from 'local-storage';


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

  const onChange = event => { console.log('24-  event.target.value= ', event.target.value )
  // setName(event.target.value); 

  ls.set('MapNameInputted', event.target.value); 
}

  return (
    <div className={classes.root}>

        <TextField
          id="standard-full-width"
          label="Map Name"
          style={{ margin: 8 }}
          onChange={onChange}
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
