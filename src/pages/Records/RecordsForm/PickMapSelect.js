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

  
const PickMapSelect = ()=>{

    const handleSelectChange = event => {
        setAge(event.target.value);
      };

      
    const classes = useStyles();
    const [age, setAge] = React.useState('');

    
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
          <MenuItem value={10}>TYPE_CODE</MenuItem>
          <MenuItem value={20}>ACCOUNT_NUMBER</MenuItem>
          <MenuItem value={30}>POST_DATE</MenuItem>
          <MenuItem value={40}>ENCUMBRANCE</MenuItem>
          <MenuItem value={50}>JOURNAL</MenuItem>
          <MenuItem value={60}>AMOUNT</MenuItem>
          <MenuItem value={70}>D_UI_PROJECT_ID</MenuItem>
          <MenuItem value={80}>D_ACCOUNT_CLASS</MenuItem>
          <MenuItem value={100}>D_AMOUNT</MenuItem>
          <MenuItem value={100}>D_PERCENT</MenuItem>
        </Select>
      </FormControl>


        </React.Fragment>
    ); 
}
export default PickMapSelect; 