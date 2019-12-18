import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

import RadioBtns from './RadioBtns.js';


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

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>fieldId - xs=12 </Paper>
        </Grid>


        <Grid item xs={12}>
          <Paper className={classes.paper}>Max Character Length</Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className={classes.paper}>Left/ Right Aligned</Paper>
        </Grid>


        <Grid item xs={12}>

            <RadioBtns />

          </Grid>

          


        <Grid item xs={12}>
          <Paper className={classes.paper}>Left/ Right Padding</Paper>
        </Grid>
        <Grid item xs={8} sm={4}>
          <Paper className={classes.paper}>checkbox </Paper>
        </Grid>
        <Grid item xs={8} sm={4}>
          <Paper className={classes.paper}>None</Paper>
        </Grid>
        <Grid item xs={8} sm={4}>
          <Paper className={classes.paper}> checkbox</Paper>
        </Grid>

      </Grid>
    </div>
  );
}
