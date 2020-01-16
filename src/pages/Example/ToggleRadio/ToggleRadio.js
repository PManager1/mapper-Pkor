import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import Radio from "@material-ui/core/Radio";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// new
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


import StaticInput from './StaticInput.js';
import DynamicInput from './DynamicInput.js';
// import RadioSelectionComponent from '../RadioSelectionComponent';


const useStyles = makeStyles(theme => ({
  firstRadio: {
    marginLeft: '200',
  },
  secondRadio: {
    marginLeft: 200,
  },
}));

const Component1 = () =>{
  return (<div>

      componet - 1
  </div>

  );
}
const Component2 = () =>{
  return (<div>

      componet - 2
  </div>

  );
}
export default function ToggleRadio(props) {
  console.log('  17 ToggleRadio -   props =', props );
  const classes = useStyles();

  const [value, setValue] = React.useState('female');

  const [selectedValue, setSelectedValue] = React.useState("Text");

  // const handleChange = event => {
  //   props.parentMethod();
  //   setSelectedValue(event.target.value);
  //   console.log(' 21  - event.target.value = ', event.target.value);
  // };
  const handleChange = event => {
    setValue(event.target.value);
    toggle();
  };

  const [state, setState] = useState(true);

  function toggle() {
    console.log(' 40 - state  toggle called =', state );
    setState(!state);
  }


  return (
    <div>

  <FormControl component="fieldset">
      <FormLabel component="legend">labelPlacement</FormLabel>
        <RadioGroup aria-label="position" name="position" value={value} onChange={handleChange} row>

        <FormControlLabel
          value="start"
          control={<Radio color="primary" />}
          label="Dynamic"
          labelPlacement="start"
        />

        <FormControlLabel
          value="end"
          control={<Radio color="primary" />}
          label="Static"
          labelPlacement="start"
        />
      </RadioGroup>
    </FormControl>


    {state ? <StaticInput /> : <DynamicInput />}
     {/* {state ? <span> Numeric! 👍</span> : <span> Static! 👎</span>} */}

    </div>
  );
}
