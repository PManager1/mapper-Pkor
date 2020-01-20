import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import Button from "@material-ui/core/Button";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';


const StaticInput  = (props) => {

  const {
    values:{ MapId, RecordId, FieldName, MappedFieldName, MaxCharLength, SequenceNumber, RadioValue, PaddingLeft, PaddingRight},
    errors,
    touched,
    handleSubmit,
    handleChange,
    isValid,
    setFieldTouched
  } = props;

  return(<div>

<TextField
        name="FieldName"
        helperText={touched.FieldName ? errors.FieldName : ""}
        error={Boolean(errors.FieldName)}
        label="FieldName"
        value={FieldName}
        onChange={handleChange}
        fullWidth
      />
      <div>{Boolean(errors.FieldName) ? errors.FieldName : ""}</div>




       <TextField
        id="standard-basic"
        label="Input Value"
        />
    </div>);
};

export default StaticInput;
