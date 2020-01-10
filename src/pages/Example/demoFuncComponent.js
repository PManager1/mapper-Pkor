import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { Route , withRouter} from 'react-router-dom';

import { useHistory } from "react-router-dom";


const sectionPlusBtn = {
  paddingTop: 5,
  marginTop: 35,
};


const Child = (props) => {
  let history = useHistory();

  const { MapId } = props.data; 
  // console.log( '40 - in child component MapId', MapId  ); 
  // console.log( '41 - in child component  this.props', props  ); 

  // const { id } = props.match.params; 

  // console.log( '40 - in child component  props.match.params id= ', id  ); 
  useEffect(() => {
    // code to run on component mount
    // props.fetchClients(); 
  }, [])
  
  // props.history.push(`/newrecord/${props.match.params.id}`); 


  const goToNewField = () => {
    console.log (' 47 - goToNewField clicked  - props =' , props );
    // console.log( '32 - goToNewField(MapID) clicked props.match.params =', props.match.params ); 
    // console.log( '34 - goToNewField(MapID) clicked props =', MapId ); 
    history.push(`/newfield/${props.data.MapId}`)
    // history.push(`/newfield`)
  }
  

    return (
      <div>
           <Grid container spacing={3} style={summary}>
            <Grid item xs={6} sm={4}>
              <section style={sectionRecordName}>  
                <Typography variant='h5' align='left'> {props.data.RecordName}  </Typography>
              </section>
             </Grid>
              <Grid item xs={6} sm={4}>
              </Grid>
              <Grid item xs={6} sm={2}>
              </Grid>
              <Grid item xs={6} sm={2}>
              <section style={sectionPlusBtn}>  
                  <Typography paragraph align="right">
                    <Tooltip title="Add New Field2" aria-label="add"> 
                      <Fab color="secondary" aria-label="add" onClick={goToNewField}   >
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

