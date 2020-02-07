import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import RightPadComponent from './RightPadComponent.js';
import LeftPadComponent from './LeftPadComponent.js';

const PaddingSelection = (props) => {
  const [selectedValue, setSelectedValue] = React.useState("Text");

  const handleChange = event => {
    console.log(' 19 clicked  onChange={handleChange}   ', event);
    // setValue(event.target.value);
    toggle();
  };


  const [state, setState] = useState(true);
  const [showLftRt, setShowLftRt] = useState(false);

  function toggle() {
    console.log(' 40 - state  toggle called =', state);
    setState(!state);
  }

  return (<React.Fragment>

    <FormLabel component="legend">Please Select Alignment </FormLabel>
    <RadioGroup aria-label="RadioValue" name="RadioValue" value={props.RadioValue}
      onChange={handleChange}
      row
    >

       <FormControlLabel
            value="None"
            control={<Radio color="secondary" />}
            onChange={handleChange(None)}
            label="None"
            labelPlacement="start"
          />

      <FormControlLabel
        value="LeftAligned"
        control={<Radio color="primary" />}
        label="Left Aligned"
        labelPlacement="start"
      />

      <FormControlLabel
        value="RightAligned"
        control={<Radio color="primary" />}
        label="Right Aligned"
        labelPlacement="start"
      />

    </RadioGroup>

    { state ? <RightPadComponent /> : <LeftPadComponent />}


  </React.Fragment>);
};

export default PaddingSelection;




