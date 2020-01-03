import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';

import { connect } from "react-redux";
import { createRecord } from '../../actions';



const Form = props => {
  const {
    values:{ RecordName, HeaderInfo, FieldName, MappedFieldName, MaxCharLength, SequenceNumber, RadioValue, PaddingLeft, PaddingRight},
    errors,
    touched,
    handleSubmit,
    handleChange,
    isValid,
    setFieldTouched
  } = props;
  // console.table(props);

  console.log('27 -  final props in form.js = ' , props ); 


  const handleSaveClick = () =>{
    console.log('28 -  called handleSaveClick inside form.js ' ); 
    props.createRecord(props.values);  
  }
 


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
      
      <TextField
        name="HeaderInfo"
        helperText={touched.HeaderInfo ? errors.HeaderInfo : ""}
        error={Boolean(errors.HeaderInfo)}
        label="HeaderInfo"
        value={HeaderInfo}
        onChange={handleChange}
        fullWidth
      />
      <div>{Boolean(errors.HeaderInfo) ? errors.HeaderInfo : ""}</div>


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



      <FormLabel component="legend">Select Left/ Right Padding  </FormLabel>
      <TextField
        name="PaddingLeft"
        helperText={touched.PaddingLeft ? errors.PaddingLeft : ""}
        error={Boolean(errors.PaddingLeft)}
        label="PaddingLeft"
        value={PaddingLeft}
        onChange={handleChange}
        fullWidth
      />
      <div>{Boolean(errors.PaddingLeft) ? errors.PaddingLeft : ""}</div>
   
      <TextField
        name="PaddingRight"
        helperText={touched.PaddingRight ? errors.PaddingRight : ""}
        error={Boolean(errors.PaddingRight)}
        label="PaddingRight"
        value={PaddingRight}
        onChange={handleChange}
        fullWidth
      />
      <div>{Boolean(errors.PaddingRight) ? errors.PaddingRight : ""}</div>
   

      {/* disabled={!isValid} */}
      <Button  type="submit"
        fullWidth
        variant="contained" 
        onClick = {handleSaveClick}
        color="primary"
      >
        Save
      </Button>

      <Button
        fullWidth
        disableElevation
        variant="contained"
        color="default"
      >
        Cancel
      </Button>
    </form>
  );
};


const mapStateToProps = (state) =>{
  console.log( ' state =', state ); 
}; 

export default connect(mapStateToProps, {
  createRecord
})(Form); 

// export default Form