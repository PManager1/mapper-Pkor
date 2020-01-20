import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3 </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3 2.1</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3.2 </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
      </Grid>



      <Grid container spacing={3}>
        <Grid item xs={12}>
          xs=12
        </Grid>
        <Grid item xs={12} sm={6}>
          xs=12 sm=6 -53
        </Grid>
        <Grid item xs={12} sm={6}>
          xs=12 sm=6  -56
        </Grid>
        <Grid item xs={6} sm={3}>
          xs=6 sm=3
        </Grid>
        <Grid item xs={6} sm={3}>
            xs=6 sm=3
        </Grid>
        <Grid item xs={6} sm={3}>
         xs=6 sm=3
        </Grid>
        <Grid item xs={6} sm={3}>
          xs=6 sm=3
        </Grid>
      </Grid>
    </div>
  );
}
