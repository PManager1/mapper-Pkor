import React from 'react';
import Typography from '@material-ui/core/Typography';
import CheckboxesTags from './CheckboxesTags';
import RecentlyEditedClients from  './RecentlyEditedClients';
import FullWidthDialog from './FullWidthDialog';
// new
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: 200,
    },
  }));



const AllRules = (props)=>{

    const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };


    return (
        <div >
            <Typography variant='h5' color="primary" align="left">
                    Add clients to current Map
            </Typography>

            <FormControl fullWidth className={classes.margin} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-amount">Search</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-amount"
                    value={values.amount}
                    onChange={handleChange('amount')}
                    startAdornment={<SearchIcon />}
                    labelWidth={60}
                />
        </FormControl>


            {/* <FullWidthDialog {...props} /> */}

            <RecentlyEditedClients />

            <br/><br/><br/>
                <br/><br/><br/>

            <CheckboxesTags />
        </div>
    );
}

export default AllRules;
