import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import Radio from "@material-ui/core/Radio";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles(theme => ({
  firstRadio: {
    marginLeft: '200',
  },
  secondRadio: {
    marginLeft: 200,
  },
}));



export default function RadioSelectionComponent(props) {
  console.log('  17 RadioSelectionComponent -   props =', props );

  const classes = useStyles();

  const [selectedValue, setSelectedValue] = React.useState("Text");

  const handleChange = event => {
    props.parentMethod();
    setSelectedValue(event.target.value);
    console.log(' 21  - event.target.value = ', event.target.value);
  };

  return (
    <div>

<Grid container spacing={3}>
  <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3 </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3 2.2</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3.2 </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
  </Grid>


      Text
      <Radio
        checked={selectedValue === "Text"}
        class={classes.firstRadio}
        onChange={handleChange}
        value="Text"
        name="radio-button-demo"
        inputProps={{ "aria-label": "A" }}
      />
      Numeric
      <Radio
        checked={selectedValue === "Numeric"}
        class={classes.secondRadio}
        onChange={handleChange}
        value="Numeric"
        name="radio-button-demo"
        inputProps={{ "aria-label": "B" }}
      />

    </div>
  );
}
