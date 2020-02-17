import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import StaticInputComponent from './StaticInputComponent.js';
import DynamicInput from './DynamicInput.js';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
  palette: {
    secondary: {
        main: '#00B3F0'
      }
    }
  },
)


const renderPaddComponents = (selectedValue) => {
  console.log('17 -  selectedValue = ', selectedValue);
  if (selectedValue === 'PickDataAttribute') {
    return (<>
      <DynamicInput />
    </>);
  }
  else if (selectedValue === 'PickAStaticAttribute') {
    return (<>
      <StaticInputComponent />
    </>);
  }
  else {
    return (<>
      </>);
  }

}

const AttributeSelectionNew = (props) => {

  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = event => {
    console.log('21-handleChange event.target.value = ', event.target.value);
    setSelectedValue(event.target.value);
  };


  return (<React.Fragment>
  <MuiThemeProvider theme={theme}>
    <FormLabel component="legend">Please Select Alignment</FormLabel>

    {/* <FormControlLabel
      checked={selectedValue === 'None'}
      onChange={handleChange}
      value="None"
      control={<Radio color="secondary" />}
      // onChange={handleChange(None)}
      label="None"
      labelPlacement="start"
    /> */}

    <FormControlLabel
      checked={selectedValue === 'PickDataAttribute'}
      onChange={handleChange}
      value="PickDataAttribute"
      control={<Radio color="secondary" />}
      // onChange={handleChange(None)}
      label="Pick Data Attribute-2"
      labelPlacement="start"
    />


    <FormControlLabel
      checked={selectedValue === 'PickAStaticAttribute'}
      onChange={handleChange}
      value="PickAStaticAttribute"
      control={<Radio color="secondary" />}
      // onChange={handleChange(None)}
      label="Pick A Static Attribute"
      labelPlacement="start"
    />

    {renderPaddComponents(selectedValue)}
    </MuiThemeProvider>
  </React.Fragment>);
};

export default AttributeSelectionNew;







