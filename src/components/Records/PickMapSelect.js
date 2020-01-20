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

const MappingFieldOptions = ["TYPE_CODE", "ACCOUNT_NUMBER", "POST_DATE", "ENCUMBRANCE", "JOURNAL", "AMOUNT", "D_UI_PROJECT_ID", "D_AMOUNT", "D_PERCENT"];

const PickMapSelect = (props)=>{

const dispatch = useDispatch();
console.log( '30 PickMapSelect Values =', props.values);

  let itemIndex = 2; // MappingFieldOptions.findIndex(x => x === MappedFieldName);

    const handleSelectChange = event => {
      console.log('32 -  handleSelectChange event.target.value =', event.target.value);

       let selectedItem = MappingFieldOptions[event.target.value];

       setMap(event.target.value);

       console.log( '41   selectedItem  == ', selectedItem );

        // console.log('47 -  Map  =', Map );
        console.log('48 -  props  =', props );

        props.values.FieldName = selectedItem
        //MappingFieldOptions[event.target.value];

        // dispatch(editField(props.values._id, props.values));


        // props.values.FieldName = ""

        // props.values.MappedFieldName = MappingFieldOptions[event.target.value];
        // dispatch(editField(props.values._id, props.values));
      };

    const classes = useStyles();
    // const [Map, setMap] = React.useState('itemIndex');
    const [Map, setMap] = React.useState('');

    return (
        <React.Fragment>
        <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">Data Attribute</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={Map}
          onChange={handleSelectChange}
        >
          <MenuItem value="">
           <em>None</em>
          </MenuItem>

          {/* {MappingFieldOptions.map((item, index) => */}
          {MappingFieldOptions.map((item, index) =>
            <MenuItem key={index} value={index}> {item} </MenuItem>
          )}

        </Select>
      </FormControl>


        </React.Fragment>
    );
}
// export default PickMapSelect;

export default connect(null, { editField })(PickMapSelect);
