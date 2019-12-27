import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';

import NewLogic from './NewLogic.js'; 


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    textArea: {
      width: 900, 
      minHeight: 200,
    },
  }));


const CreateNewRule = ()=>{
    const classes = useStyles();


    const handleSaveClick = () =>{
        console.log('28 -  called handleSaveClick inside form.js ' ); 
      }
     

    return (
        <div className={classes.root}>

           <TextareaAutosize
           className={classes.textArea}
            fullWidth
            aria-label="maximum height"
            placeholder="Please input your logic here"
            defaultValue=""
            />


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
        </div>
    ); 
}

export default CreateNewRule; 
