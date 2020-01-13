import React from 'react';
// new
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


const PickMapSelect = (props)=>{

const dispatch = useDispatch();

console.log( '30 PickMapSelect MappedFieldPicked =', props.values.MappedFieldPicked);

const { MappingFieldOptions, MappedFieldPicked } = props.values;
console.log( '26 PickMapSelect MappedFieldPicked =', MappingFieldOptions);
console.log( '27 PickMapSelect MappedFieldPicked =', MappedFieldPicked);

  const selectedOption = props.values.MappedFieldPicked;

  let itemIndex = MappingFieldOptions.findIndex(x => x === MappedFieldPicked);
  console.log( '  37  index  = ', itemIndex );


    const handleSelectChange = event => {
      console.log('28 -  handleSelectChange =', event.target.value);
        setMap(event.target.value);
        // setMap(4);
              //MappedFieldPicked
          // dispatch(editField(props.values._id, MappedFieldPicked:MappedFieldPicked));
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
