import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';


import { connect } from "react-redux";
import {useSelector, useDispatch} from 'react-redux';
import { deleteField } from '../../../actions'; 


const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}));


export default function DeleteBtn(props) {
    // console.log( '  18 -  DeleteBtn props = ', props.fieldInfo._id );

  const classes = useStyles();


  const dispatch = useDispatch();
  const handleDelete = () =>{
    console.log(' handleDelete called '); 
    dispatch(deleteField(props.fieldInfo._id));
  } 

  return (
    <div>
      <Button
        fullwidth
        onClick={handleDelete}
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>
    </div>
  );
}
