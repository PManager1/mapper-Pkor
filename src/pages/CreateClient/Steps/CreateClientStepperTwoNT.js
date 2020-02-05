import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import NameInput from './NameInput.js';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';
import ls from 'local-storage';
import { connect } from "react-redux";
import { createClient } from '../../../actions';


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
  sectioncenter:{
    textAlign: 'center',
  }
}));

function getSteps() {
  return ['Give a Name', 'Create a client'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return 'Select map settings...';
    case 1:
      return 'This is the bit I really care about!';
    case 2:
      return 'This is the bit I really care about!';
    default:
      return 'Unknown stepIndex';
  }
}

// export default
function CreateClientStepperTwoNT(props) {
  console.log ( '51 inside  CreateClientStepperTwoNT props = ', props.match.params.clientName );

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(1);
  const steps = getSteps();

  // const [value, setValue] = React.useState('');
  // setValue('Aman');

  const handleNext = () => {
    // setActiveStep(prevActiveStep => prevActiveStep + 1);
    let mapValue = ls.get('MapNameInputted')
    console.log( ' 61 - calling handleNext & mapValue =', mapValue);
    // props.createClient (mapValue);
    let param = props.match.params.clientName;
    console.log( ' 66 - param =', param);
    props.createClient (param);

    props.history.push(`/`);
  };

  const handleBack = () => {
    props.history.push(`/CreateClientStepperOneNT`);
    // setActiveStep(prevActiveStep => prevActiveStep - 1);
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

      <br/> <br/>  <br/>
      <div className={classes.sectioncenter}>
        <Typography variant='h4'>  You're going to create a new client:  {props.match.params.clientName} </Typography>
      </div>
      <br />
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


const mapStateToProps = (state) =>{
  // console.log( ' state =', state );   ls.set('MapNameInputted', event.target.value);
  console.log( '121-   ls get value ',  ls.get('MapNameInputted'));
};

export default connect(mapStateToProps, {
  createClient
})(CreateClientStepperTwoNT);

