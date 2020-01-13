import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import { editField } from "../../actions";

const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));


  const PickMapSelectRecords = (props)=>{

    console.log('25-PickMapSelectRecords-RECORDS-123   props.values =', props);

    const dispatch = useDispatch();

    // console.log( '30 PickMapSelectRecords RecordName =', props.values.RecordName);

    const { MappingRecordOptions, MappedRecordName } = props.values;


    console.log( '34 PickMapSelectRecords MappingRecordOptions =', MappingRecordOptions);
    console.log( '35 PickMapSelectRecords MappedRecordName =', MappedRecordName);


    // console.log( '27 PickMapSelectRecords MappedRecordName =', MappedRecordName);

      // const selectedOption = props.values.MappedRecordName;

     let itemIndex = MappingRecordOptions.findIndex(x => x === MappedRecordName);

    // console.log( '  37  index  = ', itemIndex );


    const handleSelectChange = event => {
      console.log('28 -  handleSelectChange =', event.target.value);
        setMap(event.target.value);

        props.values.MappedRecordName = MappingRecordOptions[event.target.value];

        dispatch(editField(props.values._id, props.values));
      };

    const classes = useStyles();
    const [Map, setMap] = React.useState(itemIndex);

    // setMap(itemIndex);

    return (
        <React.Fragment>
              <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">Pick Mapp</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={Map}
          onChange={handleSelectChange}
        >
          <MenuItem value="">
           <em>None</em>
          </MenuItem>

          {/* {MappingRecordOptions.map((item, index) => */}
          {  ["TYPE_CODE", "ACCOUNT_NUMBER", "POST_DATE", "ENCUMBRANCE", "JOURNAL", "AMOUNT", "D_UI_PROJECT_ID", "D_AMOUNT", "D_PERCENT"].map((item, index) =>
            <MenuItem key={index} value={index}> {item} </MenuItem>
          )}

        </Select>
      </FormControl>


        </React.Fragment>
    );
}
// export default PickMapSelect;

export default connect(null, { editField })(PickMapSelectRecords);
