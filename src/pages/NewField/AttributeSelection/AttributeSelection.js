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
    // setValue(event.target.value);
    toggle();
  };


  const [state, setState] = useState(true);

  function toggle() {
    console.log(' 40 - state  toggle called =', state );
    setState(!state);
  }

  return(<React.Fragment> <p>Attribute Selection </p>

      <FormLabel component="legend">Please Select Dynamic/ Static Attribute Name  </FormLabel>
      <RadioGroup aria-label="RadioValue" name="RadioValue" value={props.RadioValue}
      onChange={handleChange}
      row
      >
        <FormControlLabel
          value="LeftAligned"
          control={<Radio color="primary" />}
          label="Pick Data Attribute"
          labelPlacement="start"
        />

        <FormControlLabel
          value="RightAligned"
          control={<Radio color="primary" />}
          label="Insert New Attribute"
          labelPlacement="start"
        />

    </RadioGroup>

    {state ? <StaticInput /> : <DynamicInput />}

    </React.Fragment>);
};

export default AttributeSelection;




