import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import AlignmentRadioBtns  from '../../components/Inputs/AlignmentRadioBtns.js';
import RecordsForm from './RecordsForm.js'

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

export default function NewFields() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <RecordsForm />
     </div>
  );
}


const NewRecord = [
    { fieldId: 'field_id', EmployeeLastName: 'lastname ', EmployeeMiddleName: 'middlename', SSNo:'123-232-2332', EmployeeType: 'perm emp', Address1: '123 main St', Address2: '345 S, 4th st', City: 'Cincinatti', State:'Ohio', Zipcode: '471239', EmployeeDOB:'2348989347Z', EmployeeOrgHireDate:'2783787834Z', MaritalStatus: 'Married', Gender:'Female', PayFrequency:'Weekly', CurrentPayPeriodHours: '30', MarketSalary:'12000', EmployeeReHireDate:'23892374Z', EmployeeEmail: 'emp@company.com', InvestSource1:'inv src 1', InvestAmount: 'inv amt',  EmployeeFirstName: 'BlackBaud' },
    { fieldId: 'field_id', EmployeeLastName: 'lastname ', EmployeeMiddleName: 'middlename', SSNo:'123-232-2332', EmployeeType: 'perm emp', Address1: '123 main St', Address2: '345 S, 4th st', City: 'Cincinatti', State:'Ohio', Zipcode: '471239', EmployeeDOB:'2348989347Z', EmployeeOrgHireDate:'2783787834Z', MaritalStatus: 'Married', Gender:'Female', PayFrequency:'Weekly', CurrentPayPeriodHours: '30', MarketSalary:'12000', EmployeeReHireDate:'23892374Z', EmployeeEmail: 'emp@company.com', InvestSource1:'inv src 1', InvestAmount: 'inv amt',  EmployeeFirstName: 'Shawshank Redemption'},
    { fieldId: 'field_id', EmployeeLastName: 'lastname ', EmployeeMiddleName: 'middlename', SSNo:'123-232-2332', EmployeeType: 'perm emp', Address1: '123 main St', Address2: '345 S, 4th st', City: 'Cincinatti', State:'Ohio', Zipcode: '471239', EmployeeDOB:'2348989347Z', EmployeeOrgHireDate:'2783787834Z', MaritalStatus: 'Married', Gender:'Female', PayFrequency:'Weekly', CurrentPayPeriodHours: '30', MarketSalary:'12000', EmployeeReHireDate:'23892374Z', EmployeeEmail: 'emp@company.com', InvestSource1:'inv src 1', InvestAmount: 'inv amt',  EmployeeFirstName: 'The Godfather: Part II'}, 
    { fieldId: 'field_id', EmployeeLastName: 'lastname ', EmployeeMiddleName: 'middlename', SSNo:'123-232-2332', EmployeeType: 'perm emp', Address1: '123 main St', Address2: '345 S, 4th st', City: 'Cincinatti', State:'Ohio', Zipcode: '471239', EmployeeDOB:'2348989347Z', EmployeeOrgHireDate:'2783787834Z', MaritalStatus: 'Married', Gender:'Female', PayFrequency:'Weekly', CurrentPayPeriodHours: '30', MarketSalary:'12000', EmployeeReHireDate:'23892374Z', EmployeeEmail: 'emp@company.com', InvestSource1:'inv src 1', InvestAmount: 'inv amt',  EmployeeFirstName: 'The Dark Knight' },
   ];
  
  
  
  
  
  
  
  