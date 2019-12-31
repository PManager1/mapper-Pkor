import React, {Component} from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import RecordsForm from './RecordsForm/RecordsForm.js';


const RecordComponent = ({value})=>{

    console.log(' 12  - RecordComponent - value = ', value ); 
    return (
        <div className="root" >

                <ExpansionPanel>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                    <Typography className="heading">{value}</Typography>

                     </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                        <RecordsForm/>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
        </div>
    ); 
}

export default RecordComponent; 



       