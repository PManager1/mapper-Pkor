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
import { editRecord } from '../../../actions';
import { connect } from "react-redux";
import {useSelector, useDispatch} from 'react-redux';
import FullDialogInFormRecords from '../../../components/Records/FullDialogInFormRecords.js';

import PickMapSelectRecords from "../../../components/Records/PickMapSelectRecords.js";


export const Form = props => {
  console.log('22 - form.js - EditRecords Form props =', props );
  const {
    values:{ RecordName, MappingRecordOptions, MappedRecordName, MaxCharLength,SequenceNumber,RadioValue,LeftPadding,RightPadding},
    // values:{ RecordName: props.fieldInfo.RecordName, FieldName,MappedFieldName,MaxCharLength,SequenceNumber,RadioValue,LeftPadding,RightPadding},
    errors,
    touched,
    // handleSubmit,
    handleChange,
    isValid,
    setFieldTouched
  } = props;
  // console.table(props);


  const dispatch = useDispatch()

  const change = (name, e) => {
    e.preventDefault();
    e.persist();
    handleChange(e);
    setFieldTouched(name, true, false);
  };


  const handleSubmit = (e) =>{
    e.persist();
    // console.log( '38-handleSubmit called in form.js  ',  props.values );
    // props.editRecord(props.values._id, props.values);
    // props.editRecord();
    dispatch(editRecord(props.values._id, props.values));
  }


  const [value, setValue] = React.useState('female');
  // const handleChange = event => {
  //   setValue(event.target.value);
  // };


  return (

    <form onSubmit={handleSubmit}>

    <TextField
        name="RecordName"
        helperText={touched.RecordName ? errors.RecordName : ""}
        error={Boolean(errors.RecordName)}
        label="RecordName"
        value={RecordName}
        onChange={handleChange}
        fullWidth
      />
      <div>{Boolean(errors.RecordName) ? errors.RecordName : ""}</div>


      <PickMapSelectRecords {...props} />

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



      <FormLabel component="legend">Select Left/ Right Padding  </FormLabel>
      <TextField
        name="LeftPadding"
        helperText={touched.LeftPadding ? errors.LeftPadding : ""}
        error={Boolean(errors.LeftPadding)}
        label="Left Padding Value"
        value={LeftPadding}
        onChange={handleChange}
        fullWidth
      />
      <div>{Boolean(errors.LeftPadding) ? errors.LeftPadding : ""}</div>

      <TextField
        name="RightPadding"
        helperText={touched.RightPadding ? errors.RightPadding : ""}
        error={Boolean(errors.RightPadding)}
        label="Right Padding Value"
        value={RightPadding}
        onChange={handleChange}
        fullWidth
      />
      <div>{Boolean(errors.RightPadding) ? errors.RightPadding : ""}</div>

      <FullDialogInFormRecords {...props}/>

      <Button type="submit" fullWidth variant="contained" color="primary">
        Save
      </Button>

      <Button
        fullWidth
        variant="contained"
        color="default"
      >
        Cancel
      </Button>


    </form>
  );
};

const mapStateToProps = (state) =>{
  // console.log( '51 -  state.records =', state.records );
  return { records: state.records.data };
};

export default connect(null, { editRecord })(Form);



// https://levelup.gitconnected.com/react-redux-hooks-useselector-and-usedispatch-f7d8c7f75cdd