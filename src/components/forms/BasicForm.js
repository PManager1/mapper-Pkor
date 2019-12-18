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
      <Grid container spacing={3}>
        

      <Formik
        initialValues={{
        textFieldExample3: '',
        FirstName: '', 
        LastName: '', 
    }}
  onSubmit={data => (alert(JSON.stringify(data)))}
  render={() => (
    <Form mode='themed'>
      
      <Input
        required={true}
        name='FirstName'
        label='First Name'
        hint='This is a FirstName'
      />
      <Input
        required={true}
        name='LastName'
        label='LastName'
        hint='This is a LastName'
      />

      <PhoneInput
        name='phoneNr5'
        label='Phone Nr.'
        format='NATIONAL'
        defaultCountry='us'
        placeholder='(555) 555-5555'
        hint='This is a hint'
      />

     <Input
        required={true}     
        name='Email'
        label='Email'
        hint='This is a Email'
      />

    <Input  
        required={true}    
        name='Street Address'
        label='StreetAddress'
        hint='This is a Street Address'
      />

    <Input  
        required={true}    
        name='City'
        label='City'
        hint='This is a City'
      />


    <Select
        name='State'
        label='Select State'
        placeholder='CA'
        options={[
          { value: '1', label: 'AK' },
          { value: '2', label: 'AZ' },
          { value: '3', label: 'CA' },
          { value: '4', label: 'DC' },
          { value: '5', label: 'LA' },
          { value: '6', label: 'MD' },
        ]}
      />

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
  )}
/>


      </Grid>
    </div>
  );
}


const NewRecord = [
    { fieldId: 'field_id', EmployeeLastName: 'lastname ', EmployeeMiddleName: 'middlename', SSNo:'123-232-2332', EmployeeType: 'perm emp', Address1: '123 main St', Address2: '345 S, 4th st', City: 'Cincinatti', State:'Ohio', Zipcode: '471239', EmployeeDOB:'2348989347Z', EmployeeOrgHireDate:'2783787834Z', MaritalStatus: 'Married', Gender:'Female', PayFrequency:'Weekly', CurrentPayPeriodHours: '30', MarketSalary:'12000', EmployeeReHireDate:'23892374Z', EmployeeEmail: 'emp@company.com', InvestSource1:'inv src 1', InvestAmount: 'inv amt',  EmployeeFirstName: 'BlackBaud' },
    { fieldId: 'field_id', EmployeeLastName: 'lastname ', EmployeeMiddleName: 'middlename', SSNo:'123-232-2332', EmployeeType: 'perm emp', Address1: '123 main St', Address2: '345 S, 4th st', City: 'Cincinatti', State:'Ohio', Zipcode: '471239', EmployeeDOB:'2348989347Z', EmployeeOrgHireDate:'2783787834Z', MaritalStatus: 'Married', Gender:'Female', PayFrequency:'Weekly', CurrentPayPeriodHours: '30', MarketSalary:'12000', EmployeeReHireDate:'23892374Z', EmployeeEmail: 'emp@company.com', InvestSource1:'inv src 1', InvestAmount: 'inv amt',  EmployeeFirstName: 'Shawshank Redemption'},
    { fieldId: 'field_id', EmployeeLastName: 'lastname ', EmployeeMiddleName: 'middlename', SSNo:'123-232-2332', EmployeeType: 'perm emp', Address1: '123 main St', Address2: '345 S, 4th st', City: 'Cincinatti', State:'Ohio', Zipcode: '471239', EmployeeDOB:'2348989347Z', EmployeeOrgHireDate:'2783787834Z', MaritalStatus: 'Married', Gender:'Female', PayFrequency:'Weekly', CurrentPayPeriodHours: '30', MarketSalary:'12000', EmployeeReHireDate:'23892374Z', EmployeeEmail: 'emp@company.com', InvestSource1:'inv src 1', InvestAmount: 'inv amt',  EmployeeFirstName: 'The Godfather: Part II'}, 
    { fieldId: 'field_id', EmployeeLastName: 'lastname ', EmployeeMiddleName: 'middlename', SSNo:'123-232-2332', EmployeeType: 'perm emp', Address1: '123 main St', Address2: '345 S, 4th st', City: 'Cincinatti', State:'Ohio', Zipcode: '471239', EmployeeDOB:'2348989347Z', EmployeeOrgHireDate:'2783787834Z', MaritalStatus: 'Married', Gender:'Female', PayFrequency:'Weekly', CurrentPayPeriodHours: '30', MarketSalary:'12000', EmployeeReHireDate:'23892374Z', EmployeeEmail: 'emp@company.com', InvestSource1:'inv src 1', InvestAmount: 'inv amt',  EmployeeFirstName: 'The Dark Knight' },
   ];
  
  
  
  
  
  
  
  