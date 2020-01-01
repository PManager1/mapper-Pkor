import React, {Component} from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import RecordsForm from './RecordsForm/RecordsForm.js';

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    eachRow: {
        // backgroundColor: 'red',
        marginBottom: '1px', 
        padding: '0 0 0 7px',
        // paddingLeft: '0px',
        // marginLeft: '0px',
      },
  }));




const RecordComponent = ({value, DragHandle})=>{
        const classes = useStyles();  
    // console.log(' 12  - RecordComponent - value = ', value ); 
    return (
        <div className="root" >

                <ExpansionPanel className={classes.eachRow}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                    <Typography className="heading"> <DragHandle />   &nbsp;&nbsp;     {value.FieldName}</Typography>

                     </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                        <RecordsForm  fieldInfo={value} />
                    </ExpansionPanelDetails>
                </ExpansionPanel>
        </div>
    ); 
}

export default RecordComponent; 



       