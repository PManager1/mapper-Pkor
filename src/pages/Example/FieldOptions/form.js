import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';

import { connect } from "react-redux";
import { createField } from '../../../actions';

import PickMapSelect from '../../../components/Records/PickMapSelect.js';
import { useHistory } from "react-router-dom";


const Form = props => {

  let history = useHistory();

  const {
    values:{ MapId, RecordId, FieldName, MappedFieldName, MaxCharLength, SequenceNumber, RadioValue, PaddingLeft, PaddingRight},
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
    // props.createClient(props.values);
    console.log('33 -  this.props ', props );
    props.createField(props.values);
    history.goBack();
  }


  const change = (name, e) => {
    e.preventDefault();
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

      {/* <TextField
        name="MapId"
        helperText={touched.MapId ? errors.MapId : ""}
        error={Boolean(errors.MapId)}
        label="MapId"
        value={MapId}
        onChange={handleChange}
        disabled
        fullWidth
      />
      <div>{Boolean(errors.MapId) ? errors.MapId : ""}</div> */}

{/* RecordId */}

{/* <TextField
        name="RecordId"
        helperText={touched.RecordId ? errors.RecordId : ""}
        error={Boolean(errors.RecordId)}
        label="RecordId"
        value={RecordId}
        onChange={handleChange}
        disabled
        fullWidth
      />
      <div>{Boolean(errors.RecordId) ? errors.RecordId : ""}</div> */}


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

      <PickMapSelect />

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


      <FormLabel component="legend">Please Select Alignment Value</FormLabel>
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
        label="Padding Left Value"
        value={PaddingLeft}
        onChange={handleChange}
        fullWidth
      />
      <div>{Boolean(errors.PaddingLeft) ? errors.PaddingLeft : ""}</div>

      <TextField
        name="PaddingRight"
        helperText={touched.PaddingRight ? errors.PaddingRight : ""}
        error={Boolean(errors.PaddingRight)}
        label="Padding Right  Value"
        value={PaddingRight}
        onChange={handleChange}
        fullWidth
      />
      <div>{Boolean(errors.PaddingRight) ? errors.PaddingRight : ""}</div>



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
  createField
})(Form);

// export default Form