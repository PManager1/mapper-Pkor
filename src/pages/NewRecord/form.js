import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import { connect } from "react-redux";
import { createRecord } from '../../actions';
// new
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import CancelDeleteButtons from '../../components/Buttons/CancelDeleteButtons';

// new end
// Pick the data set list.
const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));



const Form = props => {

  let history = useHistory();

  const classes = useStyles();
  const [age, setAge] = React.useState('');


  const {
    values: { MapId, RecordName, MaxCharLength, SequenceNumber, RadioValue, PaddingLeft, PaddingRight },
    errors,
    touched,
    handleSubmit,
    handleChange,
    isValid,
    setFieldTouched
  } = props;
  // console.table(props);

  console.log('27 -  final props in form.js = ', props);


  const handleSaveClick = () => {
    console.log('28 -  called handleSaveClick inside form.js ');
    props.createRecord(props.values);
    history.goBack();
  }

  const handleCancelClick = () => {
    console.log('64 -  called handleCancelClick');
    // props.createRecord(props.values);
    history.goBack();
  }

  const handleDeleteBtn = () =>{
    console.log('107 -  calling handleDeleteBtn' );
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


  const handleSelectChange = event => {
    setAge(event.target.value);
  };

  const handleSelectChangeOutputFormat = event => {
    setAge(event.target.value);
  };

  const handleSelectChangeDelimiter = event => {
    setAge(event.target.value);
  };


  return (
    <form onSubmit={handleSubmit}>


      {/* <TextField
        name="MapId"
        helperText={touched.MapId ? errors.MapId : ""}
        error={Boolean(errors.MapId)}
        label="MapId"
        value={MapId}
        disabled
        onChange={handleChange}
        fullWidth
      />
    <div>{Boolean(errors.MapId) ? errors.MapId : ""}</div> */}

      <TextField
        name="RecordName"
        helperText={touched.RecordName ? errors.RecordName : ""}
        error={Boolean(errors.RecordName)}
        label="RecordName"
        // value={RecordName}
        onChange={handleChange}
        fullWidth
      />
      <div>{Boolean(errors.RecordName) ? errors.RecordName : ""}</div>


      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-filled-label">Pick DataSet  </InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              // value={age}
              onChange={handleSelectChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>DataSet BB-1 </MenuItem>
              <MenuItem value={20}>DataSet BB-2</MenuItem>
              <MenuItem value={30}>DataSet BB-3</MenuItem>
            </Select>
          </FormControl>

        </Grid>
        </Grid>



      <Grid container spacing={3}>
        <Grid item xs={4} sm={4}>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-filled-label">Output format  </InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              // value={age}
              onChange={handleSelectChangeOutputFormat}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>JSON </MenuItem>
              <MenuItem value={20}>Delimited ( show more options like comma / something ) </MenuItem>

            </Select>
          </FormControl>

        </Grid>

        <Grid item xs={6} sm={6}>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-filled-label">Pick Delimiter  </InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              // value={age}
              onChange={handleSelectChangeDelimiter}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>comma </MenuItem>
              <MenuItem value={20}>pipe </MenuItem>
              <MenuItem value={20}>others </MenuItem>

            </Select>
          </FormControl>

        </Grid>
      </Grid>


      <CancelDeleteButtons  handleCancelClick={handleCancelClick}
                            handleDeleteBtn={handleDeleteBtn}
                            handleSaveClick={handleSaveClick}

      />

    </form>
  );
};


const mapStateToProps = (state) => {
  console.log(' state =', state);
};

export default connect(mapStateToProps, {
  createRecord
})(Form);

// export default Form