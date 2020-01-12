import React from 'react';
// new
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

const dataSets = ['TYPE_CODE', 'ACCOUNT_NUMBER', 'POST_DATE', 'ENCUMBRANCE', 'JOURNAL', 'AMOUNT', 'D_UI_PROJECT_ID', 'D_AMOUNT', 'D_PERCENT'];

const selectedOption = 'D_PERCENT';

let itemIndex = dataSets.findIndex(x => x === selectedOption);
console.log( '  25  index  = ', itemIndex );


const PickMapSelect = ()=>{

    const handleSelectChange = event => {
      console.log('28 -  handleSelectChange =', event.target.value);
        setAge(event.target.value);
        // setAge(4);
      };

    const classes = useStyles();
    const [age, setAge] = React.useState(itemIndex);

    // setAge(itemIndex);


    return (
        <React.Fragment>
              <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">Pick Mapp</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={age}
          onChange={handleSelectChange}
        >
          <MenuItem value="">
           <em>None</em>
          </MenuItem>

          {dataSets.map((item, index) =>
            <MenuItem key={index} value={index}> {item} </MenuItem>
          )}

        </Select>
      </FormControl>


        </React.Fragment>
    );
}
export default PickMapSelect;