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


const renderPaddComponents = () =>{
  if (false) {
    return (<>
          <RightPadComponent />
        </>);
}
//on same day webinar starting in less than 15 minutes
  else {
      return (<>
        <LeftPadComponent />
      </>);
    }


}

const PaddingSelectionTest = (props) => {

  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = event => {
    console.log( '21-handleChange event.target.value = ', event.target.value );
    setSelectedValue(event.target.value);
  };


  return (<React.Fragment>

    <FormLabel component="legend">Please Select Alignment Test </FormLabel>

    <FormControlLabel
            checked={selectedValue === 'None'}
            onChange={handleChange}
            value="None"
            control={<Radio color="secondary" />}
            // onChange={handleChange(None)}
            label="None"
            labelPlacement="start"
          />

<FormControlLabel
            checked={selectedValue === 'LeftAligned'}
            onChange={handleChange}
            value="LeftAligned"
            control={<Radio color="secondary" />}
            // onChange={handleChange(None)}
            label="LeftAligned"
            labelPlacement="start"
          />


<FormControlLabel
            checked={selectedValue === 'RightAligned'}
            onChange={handleChange}
            value="RightAligned"
            control={<Radio color="secondary" />}
            // onChange={handleChange(None)}
            label="RightAligned"
            labelPlacement="start"
          />

{/* { state ? <RightPadComponent /> : <LeftPadComponent />} */}

{renderPaddComponents()}



  </React.Fragment>);
};

export default PaddingSelectionTest;




