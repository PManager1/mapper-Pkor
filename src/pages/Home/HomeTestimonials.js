import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import fivestars from './ImagesIndex/5stars.png'; 


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    height: 300,
  },
  HTPaper:{
    fontSize: 24, 
    padding: 35,
    backgroundColor: '#F9F9F9',
  },
  HTtestiPara:{
      fontSize:24,
      padding: 35,
      color:'#7a6f71',
  },
  HTFivestars:{
    marginLeft: 'auto', 
    marginRight: 'auto', 
    textAlign: 'center',
    marginBottom:15,
    marginTop:40,
  },
  testiName:{
    marginTop: 30, 
    color: '#22bcb9',
    fontFamily: 'Helvetica,Arial,sans-serif',
    fontStyle: 'normal',
    fontSize: 18,
    fontWeight: 700, 
    textAlign: 'center',
  }
}));

export default function HomeTestimonials() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4}  direction="column" alignItems="center"  justify="center"    >
      {/* xs=3 LTG icon */}
        
        <Grid item xs={4}>
          <Paper className={classes.HTPaper}>
              <div className="text-center">
                <img className={classes.HTFivestars}  src={fivestars} alt="" /> 
              </div>   
              <p className={classes.HTtestiPara}>
                    Paper can be used to build surface or other elements for your application.
                </p>
              <p className={classes.testiName}> Jay </p>
          </Paper>

        </Grid>


        <Grid item xs={4}>

<Paper className={classes.HTPaper}>
    <Typography variant="h5" component="h3">
      This is a sheet of paper.
    </Typography>
    <Typography component="p">
      Paper can be used to build surface or other elements for your application.
    </Typography>
</Paper>

</Grid>



<Grid item xs={4}>

          <Paper className={classes.HTPaper}>
              <Typography variant="h5" component="h3">
                This is a sheet of paper.
              </Typography>
              <Typography component="p">
                Paper can be used to build surface or other elements for your application.
              </Typography>
          </Paper>

        </Grid>


      </Grid>
    </div>
  );
 
}



