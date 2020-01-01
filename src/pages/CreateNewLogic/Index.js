import React, { Component, useState, useEffect } from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import NewLogic from './NewLogic.js'; 

import { Formik } from 'formik';
import { Form, Input, Textarea, Select, SubmitBtn } from 'react-formik-ui';

import { connect } from "react-redux";
import { createLogic } from '../../actions';
import {useSelector, useDispatch} from 'react-redux';


const textArea = {
  width: '900', 
  minHeight: '200',
  backgroundColor: 'white',
};


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  textArea: {
    width: 900, 
    minHeight: 200,
    backgroundColor: 'white',
  },
}));
  
  // const classes = useStyles();

function CreateLogic (){ 
  
  const classes = useStyles();

  const dispatch = useDispatch(); 

      return (
      <Formik
        initialValues={{
          logicCode: '',
          logicName: '', 
        }}
        onSubmit={  data =>   {
          // (alert(JSON.stringify(data))) 
          dispatch(createLogic (data));
        }
        }
        render={() => (
          <Form mode='themed'>
            <Input
              required='true'
              name='logicName'
              label='Logic Name'
              hint='This is a LogicName'
            />

          <Textarea
                name='logicCode'
                label='Write a logic'
                className={classes.textArea}
              />

            <div className="text-center">
            <button type="submit" className="btn primary"  >
                  Save Logic
                </button>
                </div> 
          </Form>
        )}
      />
      ); 
};
      
// export default CreateLogic; 

const mapStateToProps = (state) =>{
  // console.log( '51 -  state.records =', state.records ); 
  return { records: state.records.data }; 
}; 

export default connect(null, { createLogic })(CreateLogic);
