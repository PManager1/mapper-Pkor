import React, {Component} from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import RecordsForm from './RecordsForm/RecordsForm.js';
import { makeStyles } from '@material-ui/core/styles';

const RecordComponent = ({value, DragHandle})=>{
    
    const useStyles = makeStyles(theme => ({
        root: {
          flexGrow: 1,
          backGround: 'red',
        },
        paper: {
          padding: theme.spacing(2),
          textAlign: 'center',
          color: theme.palette.text.secondary,
        },
      }));


    console.log(' 12  - RecordComponent - value = ', value ); 
    console.log(' 13  - DragHandle = ', DragHandle ); 
    return (
        <div className="root" >

                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                    <Typography className="heading"> <DragHandle /> {value.FieldName}</Typography>

                     </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                        <RecordsForm  fieldInfo={value} />
                    </ExpansionPanelDetails>
                </ExpansionPanel>
        </div>
    ); 
}

export default RecordComponent; 



       