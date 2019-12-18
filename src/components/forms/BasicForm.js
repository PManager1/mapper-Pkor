import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


import { Formik } from 'formik'
import { Form, Input, PhoneInput, Select, SubmitBtn } from 'react-formik-ui';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function BasicForm() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Formik
        initialValues={{
        textFieldExample3: '',
        FirstName: '', 
        LastName: '', 
    }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (

<Grid container alignItems="center" spacing={3}>

    <Form mode='themed' style={{ width: '100%'}}>

    <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Input
              required={true}
              name='FirstName'
              label='First Name'
              hint='This is a FirstName'
            />
        </Paper>
       </Grid>
 

    <Input  
        required={true}    
        name='Zip+'
        label='Zip'
        hint='This is a Zip'
      />
      <div className="text-center">
      <button type="submit" className="btn"  >
            Get Cash Offer Now 
          </button>
          </div> 
    </Form>
    </Grid>

  )}
/>


      
    </div>
  );
}


const NewRecord = [
    { fieldId: 'field_id', EmployeeLastName: 'lastname ', EmployeeMiddleName: 'middlename', SSNo:'123-232-2332', EmployeeType: 'perm emp', Address1: '123 main St', Address2: '345 S, 4th st', City: 'Cincinatti', State:'Ohio', Zipcode: '471239', EmployeeDOB:'2348989347Z', EmployeeOrgHireDate:'2783787834Z', MaritalStatus: 'Married', Gender:'Female', PayFrequency:'Weekly', CurrentPayPeriodHours: '30', MarketSalary:'12000', EmployeeReHireDate:'23892374Z', EmployeeEmail: 'emp@company.com', InvestSource1:'inv src 1', InvestAmount: 'inv amt',  EmployeeFirstName: 'BlackBaud' },
    { fieldId: 'field_id', EmployeeLastName: 'lastname ', EmployeeMiddleName: 'middlename', SSNo:'123-232-2332', EmployeeType: 'perm emp', Address1: '123 main St', Address2: '345 S, 4th st', City: 'Cincinatti', State:'Ohio', Zipcode: '471239', EmployeeDOB:'2348989347Z', EmployeeOrgHireDate:'2783787834Z', MaritalStatus: 'Married', Gender:'Female', PayFrequency:'Weekly', CurrentPayPeriodHours: '30', MarketSalary:'12000', EmployeeReHireDate:'23892374Z', EmployeeEmail: 'emp@company.com', InvestSource1:'inv src 1', InvestAmount: 'inv amt',  EmployeeFirstName: 'Shawshank Redemption'},
    { fieldId: 'field_id', EmployeeLastName: 'lastname ', EmployeeMiddleName: 'middlename', SSNo:'123-232-2332', EmployeeType: 'perm emp', Address1: '123 main St', Address2: '345 S, 4th st', City: 'Cincinatti', State:'Ohio', Zipcode: '471239', EmployeeDOB:'2348989347Z', EmployeeOrgHireDate:'2783787834Z', MaritalStatus: 'Married', Gender:'Female', PayFrequency:'Weekly', CurrentPayPeriodHours: '30', MarketSalary:'12000', EmployeeReHireDate:'23892374Z', EmployeeEmail: 'emp@company.com', InvestSource1:'inv src 1', InvestAmount: 'inv amt',  EmployeeFirstName: 'The Godfather: Part II'}, 
    { fieldId: 'field_id', EmployeeLastName: 'lastname ', EmployeeMiddleName: 'middlename', SSNo:'123-232-2332', EmployeeType: 'perm emp', Address1: '123 main St', Address2: '345 S, 4th st', City: 'Cincinatti', State:'Ohio', Zipcode: '471239', EmployeeDOB:'2348989347Z', EmployeeOrgHireDate:'2783787834Z', MaritalStatus: 'Married', Gender:'Female', PayFrequency:'Weekly', CurrentPayPeriodHours: '30', MarketSalary:'12000', EmployeeReHireDate:'23892374Z', EmployeeEmail: 'emp@company.com', InvestSource1:'inv src 1', InvestAmount: 'inv amt',  EmployeeFirstName: 'The Dark Knight' },
   ];
  
  
  
  
  
  
  
  