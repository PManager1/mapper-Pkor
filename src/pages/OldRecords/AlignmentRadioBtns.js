import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function AlignmentRadioBtns() {
  const [value, setValue] = React.useState('female');

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend"> __Select Alignment </FormLabel>
      <RadioGroup aria-label="position" name="position" value={value} onChange={handleChange} row>
        <FormControlLabel
          value="LeftAligned"
          control={<Radio color="primary" />}
          label="LeftAligned"
          labelPlacement="start"
        />
        <FormControlLabel
          value="None"
          control={<Radio color="secondary" />}
          label="None"
          labelPlacement="start"
        />
        <FormControlLabel
          value="RightAligned"
          control={<Radio color="primary" />}
          label="RightAligned"
          labelPlacement="start"
        />

      </RadioGroup>
    </FormControl>
  );
}
