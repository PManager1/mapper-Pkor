import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import NewLogic from './NewLogic.js'; 

import { Formik } from 'formik';
import { Form, Input, PhoneInput, Select, SubmitBtn } from 'react-formik-ui';

import { connect } from "react-redux";
import { createLogic } from '../../actions';


const textArea = {
  width: '900', 
  minHeight: '200',
};


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  textArea: {
    width: 900, 
    minHeight: 200,
  },
}));
  
  // const classes = useStyles();

function CreateLogic (){ 
  
  const classes = useStyles();

      return (
      <Formik
        initialValues={{
          textFieldExample3: '',
          LogicName: '', 
          LastName: '', 
        }}
        onSubmit={  data => (alert(JSON.stringify(data)))  }
        render={() => (
          <Form mode='themed'>
            
            <Input
              required='true'
              name='LogicName'
              label='Logic Name'
              hint='This is a LogicName'
            />

            <TextareaAutosize
                      style={textArea}
                      className={classes.textArea}
                      fullWidth
                      aria-label="maximum height"
                      placeholder="Please input your logic here"
                      defaultValue=""
            />
          
            <div className="text-center">
            <button type="submit" className="btn"  >
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
