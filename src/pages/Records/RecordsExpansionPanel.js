import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CheckboxLabels from './CheckboxLabels';
import InputAdornments from './InputAdornments.js';
import RadioButtonsGroup from './RadioButtonsGroup.js'; 
import FieldDetails from './FieldDetails.js';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import Fab from '@material-ui/core/Fab';
import RecordsForm from './RecordsForm/RecordsForm.js';
import Tooltip from '@material-ui/core/Tooltip';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleExpansionPanel() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

        <Typography variant='h6' color="primary" align="left">
          Mapper Id: Balckbaud 123345
        </Typography>

        <Typography paragraph align="right">
        <Tooltip title="Add New Record" aria-label="add"> 
          <Fab color="primary" aria-label="add"   component={Link} to="/newfield" >
              <AddIcon />   
            </Fab>
          </Tooltip>
        </Typography>   


      <Typography variant='h5' align='left'> Header Record 1</Typography>

      <Typography paragraph align="right">
        <Tooltip title="Add New Field" aria-label="add"> 
          <Fab color="secondary" aria-label="add"   component={Link} to="/newRecord" >
            <AddIcon /> 
            </Fab>
          </Tooltip>
        </Typography>  

      

      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Record_ID</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <RecordsForm/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      

      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>GL_Client_number</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <RecordsForm/>
        </ExpansionPanelDetails>
      </ExpansionPanel>


      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>File_Date_MM</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <RecordsForm/>
        </ExpansionPanelDetails>
      </ExpansionPanel>


      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>File_Date_DD</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <RecordsForm/>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>File_Date_CC</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <RecordsForm/>
        </ExpansionPanelDetails>
      </ExpansionPanel>


      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>debit_amount</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <RecordsForm/>
        </ExpansionPanelDetails>
      </ExpansionPanel>


      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>credit_amount</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <RecordsForm/>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Period_End_Date_MM</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <RecordsForm/>
        </ExpansionPanelDetails>
      </ExpansionPanel>


      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}> Period_End_Date_CC </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <RecordsForm/>
        </ExpansionPanelDetails>
      </ExpansionPanel>



      <Typography variant='h5'  align='left'> Detail_Record </Typography>

      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>2 Field</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <RecordsForm/>
        </ExpansionPanelDetails>
      </ExpansionPanel>



      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Detail</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <RecordsForm/>
        </ExpansionPanelDetails>
      </ExpansionPanel>


      <Typography variant='h5'  align='left'> Trail_Record </Typography>

      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>1 Trail Field</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <RecordsForm/>
        </ExpansionPanelDetails>
      </ExpansionPanel>



      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>2 Trail Field</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <RecordsForm/>
        </ExpansionPanelDetails>
      </ExpansionPanel>

    </div>
  );
}


const FieldList = [
  { fieldId: 'field_id', maxCharLength: '20', Alignment: 'left', LeftPadding: '0', RightPadding: '0' },
  { fieldId: 'field_id', maxCharLength: '20', Alignment: 'left', LeftPadding: '0', RightPadding: '0' },
  { fieldId: 'field_id', maxCharLength: '20', Alignment: 'left', LeftPadding: '0', RightPadding: '0' }, 
  { fieldId: 'field_id', maxCharLength: '20', Alignment: 'left', LeftPadding: '0', RightPadding: '0' }
 ];