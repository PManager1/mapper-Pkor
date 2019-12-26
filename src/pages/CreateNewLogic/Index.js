import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { makeStyles } from '@material-ui/core/styles';
// or
// import { TextareaAutosize } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    textArea: {
      width: 1200, 
      minHeight: 200,
    },
  }));


const CreateNewRule = ()=>{
    const classes = useStyles();

    return (
        <div className={classes.root}>
           <TextareaAutosize
           className={classes.textArea}
            fullWidth
            aria-label="maximum height"
            placeholder="Please input your logic here"
            defaultValue=""
            />
        </div>
    ); 
}

export default CreateNewRule; 
