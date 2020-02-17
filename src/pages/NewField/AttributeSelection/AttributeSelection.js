import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';


import StaticInput from './StaticInput.js';
import DynamicInput from './DynamicInput.js';

const AttributeSelection  = (props) => {
  const [selectedValue, setSelectedValue] = React.useState("Text");

  const handleChange = event => {
    console.log(' 19 clicked  onChange={handleChange}   ');
    toggle();
  };


  const [state, setState] = useState(true);

  function toggle() {
    console.log(' 40 - state  toggle called =', state );
    setState(!state);
  }

  return(<React.Fragment>

      {/* <FormLabel component="legend">Please Select Attribute Name </FormLabel> */}
      <RadioGroup aria-label="RadioValue" name="RadioValue" value={props.RadioValue}
      onChange={handleChange}
      row
      >
        <FormControlLabel
          value="LeftAligned"
          control={<Radio color="primary" />}
          label="Pick Data Attribute-1"
          labelPlacement="end"
        />

        <FormControlLabel
          value="RightAligned"
          control={<Radio color="#00B3F0" />}
          label="Add a static attribute"
          labelPlacement="end"
        />

    </RadioGroup>

    {state ? <StaticInput {...props} /> : <DynamicInput {...props} />}

    </React.Fragment>);
};

export default AttributeSelection;




