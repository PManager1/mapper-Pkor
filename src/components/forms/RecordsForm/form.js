import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import NameIcon from "@material-ui/icons/SupervisorAccount";
import LockIcon from "@material-ui/icons/Lock";
import EmailIcon from "@material-ui/icons/Email";

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';


export const Form = props => {
  const {
    values: { FieldName, MappedFieldName, MaxCharLength, SequenceNumber, RadioValue },
    errors,
    touched,
    handleSubmit,
    handleChange,
    isValid,
    setFieldTouched
  } = props;
  console.table(props);


  const change = (name, e) => {
    e.persist();
    handleChange(e);
    setFieldTouched(name, true, false);
  };

  const [value, setValue] = React.useState('female');
  // const handleChange = event => {
  //   setValue(event.target.value);
  // };

  

  return (
    <form onSubmit={handleSubmit}>
      <h1> RecordsForm </h1>
      <TextField
        name="FieldName"
        helperText={touched.FieldName ? errors.FieldName : ""}
        error={Boolean(errors.FieldName)}
        label="FieldName"
        value={FieldName}
        onChange={handleChange}
        fullWidth
      />
      <div>{Boolean(errors.name) ? errors.name : ""}</div>

      <TextField
        name="MappedFieldName"
        helperText={touched.MappedFieldName ? errors.MappedFieldName : ""}
        error={Boolean(errors.MappedFieldName)}
        label="MappedFieldName"
        value={MappedFieldName}
        onChange={handleChange}
        fullWidth
      />
      <div>{Boolean(errors.MappedFieldName) ? errors.MappedFieldName : ""}</div>
      


      <TextField
        name="MaxCharLength"
        helperText={touched.MaxCharLength ? errors.MaxCharLength : ""}
        error={Boolean(errors.MaxCharLength)}
        label="MaxCharLength"
        value={MaxCharLength}
        onChange={handleChange}
        fullWidth
      />
      <div>{Boolean(errors.MaxCharLength) ? errors.MaxCharLength : ""}</div>


      <TextField
        name="SequenceNumber"
        helperText={touched.SequenceNumber ? errors.SequenceNumber : ""}
        error={Boolean(errors.SequenceNumber)}
        label="SequenceNumber"
        value={SequenceNumber}
        onChange={handleChange}
        fullWidth
      />
      <div>{Boolean(errors.SequenceNumber) ? errors.SequenceNumber : ""}</div>
   

      <FormLabel component="legend">Please Select Alignment </FormLabel>
      <RadioGroup aria-label="RadioValue" name="RadioValue" value={RadioValue} onChange={handleChange} row>
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

   
      <Button
        type="submit"
        fullWidth
        variant="raised"
        color="primary"
        disabled={!isValid}
      >
        Submit
      </Button>
    </form>
  );
};
