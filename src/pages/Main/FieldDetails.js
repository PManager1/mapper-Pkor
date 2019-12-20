import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import AlignmentRadioBtns  from '../../components/Inputs/AlignmentRadioBtns.js';

import LeftPaddingInput from '../../components/Inputs/LeftPaddingInput.js';
import RightPaddingInput from '../../components/Inputs/RightPaddingInput.js';


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

export default function FieldDetails() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
        
        </Grid>


        <Grid item xs={12}>
          <AlignmentRadioBtns />
        </Grid>


        <Grid item xs={12}>
          <Paper className={classes.paper}>Left/ Right Padding</Paper>
        </Grid>
        <Grid item xs={8} sm={4}>
        <LeftPaddingInput />
        </Grid>
        <Grid item xs={8} sm={4}>
          <Paper className={classes.paper}>None</Paper>
        </Grid>
        <Grid item xs={8} sm={4}>
         <RightPaddingInput />
        </Grid>

      </Grid>
    </div>
  );
}
