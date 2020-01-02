import React, { useEffect } from 'react';
import { connect } from "react-redux";
import Typography from '@material-ui/core/Typography';
import SortableComponent from './SortableComponent';

import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';


const summary = {
  height: "50%",
  paddingTop: 5,
};

const sectionRecordName = {
  paddingTop: 5,
  marginTop: 70,
  height: 50,
  marginBottom: -10,
};

const sectionPlusBtn = {
  paddingTop: 5,
  marginTop: 35,
};

const Child = (props) => {

  console.log( '7 - this.props  in child component ', props.data  ); 
  useEffect(() => {
    // code to run on component mount
    // props.fetchClients(); 
  }, [])


    return (
      <div>
           <Grid container spacing={3} style={summary}>
            <Grid item xs={6} sm={4}>
              {/* <section style={sectionRecordName}>  
                <Typography variant='h5' align='left'> {props.data.RecordName}  </Typography>
              </section> */}
             </Grid>
              <Grid item xs={6} sm={4}>
              </Grid>
              <Grid item xs={6} sm={2}>
              </Grid>
              <Grid item xs={6} sm={2}>
              <section style={sectionPlusBtn}>  
                  <Typography paragraph align="right">
                    <Tooltip title="Add New Field" aria-label="add"> 
                      <Fab color="secondary" aria-label="add"   component={Link} to="/newfield" >
                        <AddIcon /> 
                        </Fab>
                      </Tooltip>
                  </Typography>  
                </section>
                </Grid>
      </Grid>

           
            {/* we pass RecordId which has multiple fields in it. Now this one fetches & creates mutiple childs */}
            <SortableComponent Record={props.data}/>              
      </div>
    );
  }

export default Child; 

