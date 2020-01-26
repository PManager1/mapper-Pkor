import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';
import NameInput from './NameInput.js';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Give a Client Name', 'Create a Client'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return 'What is an client name?';
    case 1:
      return 'This is the bit I really care about!';
    default:
      return 'Unknown stepIndex';
  }
}

export default function CreateClientStepperOneNT(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const [clientName, setClientName] = useState('');

  const onNameChange = (e) => {
    // console.log( '50 - onNameChange called with props= ', e.target.value );
    console.log( '51 - onNameChange inside createClientStepperOneNY = ', e );
    setClientName({clientName : e});
    console.log( '53 - clientName = ', clientName  );
  };


  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);

    props.history.push(`/CreateClientStepperTwoNT`);
  };

  const handleBack = () => {
    props.history.pop();
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Divider />
      <NameInput onNameChange= {onNameChange} {...props} />
      <br/>

      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

