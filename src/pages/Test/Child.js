import React, { useEffect } from 'react';
import { connect } from "react-redux";
import Typography from '@material-ui/core/Typography';
import SortableComponent from './SortableComponent';

import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import { Link } from 'react-router-dom';

const Child = (props) => {

  console.log( '7 - this.props  in child component ', props.data  ); 
  useEffect(() => {
    // code to run on component mount
    // props.fetchClients(); 
  }, [])


    return (
      <div>

            <Typography variant='h5' align='left'> {props.data.RecordName}  </Typography>

            <Typography paragraph align="right">
              <Tooltip title="Add New Field" aria-label="add"> 
                <Fab color="secondary" aria-label="add"   component={Link} to="/newfield" >
                  <AddIcon /> 
                  </Fab>
                </Tooltip>
            </Typography>  

            {/* we pass RecordId which has multiple fields in it. Now this one fetches & creates mutiple childs */}
            <SortableComponent Record={props.data}/>              
      </div>
    );
  }

export default Child; 

