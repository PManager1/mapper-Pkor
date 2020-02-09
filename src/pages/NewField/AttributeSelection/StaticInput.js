import React from 'react';
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


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


const StaticInput  = (props) => {

  const classes = useStyles();

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

<Grid container spacing={3}>
  <Grid item xs={6} sm={3}>
  <TextField
        name="FieldName"
        helperText={touched.FieldName ? errors.FieldName : ""}
        error={Boolean(errors.FieldName)}
        label="Field Name"
        value={FieldName}
        onChange={handleChange}
      />
      <div>{Boolean(errors.FieldName) ? errors.FieldName : ""}</div>

        </Grid>
        <Grid item xs={6} sm={3}>

        <TextField
        id="standard-basic"
        label="Input value"
      />


        </Grid>
</Grid>

    </div>);
};

export default StaticInput;
