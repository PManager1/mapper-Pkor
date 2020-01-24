import React from 'react';
import PickMapSelect from '../../../components/Records/PickMapSelect.js';

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import Button from "@material-ui/core/Button";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const DynamicInput = (props) => {

  // const classes = useStyles();

  const {
    values: { MapId, RecordId, FieldName, MappedFieldName, MaxCharLength, SequenceNumber, RadioValue, PaddingLeft, PaddingRight },
    errors,
    touched,
    handleSubmit,
    handleChange,
    isValid,
    setFieldTouched
  } = props;

  return (<div>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={3}>
          <PickMapSelect {...props} />
        </Grid>

        <Grid item xs={6} sm={3}>
          <TextField
            id="standard-basic"
            label="Field Name"
          />
        </Grid>
      </Grid>

    </div>);
};

export default DynamicInput;
