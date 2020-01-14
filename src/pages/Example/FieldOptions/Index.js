import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// import AlignmentRadioBtns  from '../../components/Inputs/AlignmentRadioBtns.js';
import RecordsFormOne from './RecordsFormOne.js';
import RecordsFormTwo from './RecordsFormTwo.js';

import RadioSelectionComponent from './RadioSelectionComponent';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  title: {
    flexGrow: 1,
    color: theme.palette.text.secondary,
  },
}));

export default function NewFields(props) {
  const classes = useStyles();
  // const { id } = props.match.params;
  console.log ( '25 - NewField -  props.match.params= ',  props.match.params );
  const { id } = props.match.params;
  const { recordId } = props.match.params;

  console.log ( '28 - NewField -  recordId= ',  recordId );
  console.log ( '31 - NewField - id= ',  id );

  // new things

  const [state, setState] = useState(true);

  function toggle() {
    console.log(' 40 - state  =', state );
    setState(!state);
  }

  return (
    <div className="App">
      <h2 onClick={toggle}>
        <p>Do you feel good today?</p>  </h2>
        <div className="toggle">
          {state ? <span>Yes! 👍</span> : <span>No! 👎</span>}
          {/* {state ? <RecordsFormOne /> : <RecordsFormTwo />} */}

        </div>
    </div>
  );
}

