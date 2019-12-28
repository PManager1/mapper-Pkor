import React, { useEffect } from 'react';
import { connect } from "react-redux";
import Typography from '@material-ui/core/Typography';
import SortableComponent from './SortableComponent';

const Child = (props) => {

  console.log( '7 - this.props  in child component ', props.data  ); 

  useEffect(() => {
    // code to run on component mount
    // props.fetchClients(); 
  }, [])


    return (
      <div>
            <Typography variant='h5' align='left'> {props.data.RecordName}  </Typography>
            {/* we pass RecordId which has multiple fields in it. Now this one fetches & creates mutiple childs */}
            <SortableComponent Record={props.data}/>              
      </div>
    );
  }

export default Child; 

