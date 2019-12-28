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

  
 const listItems =  ['C1', 'C2', 'C3', 'C4', 'C5'].map((number) =>
    <Typography variant='h5' align='left'> {number}</Typography>
);


    return (
      <div>
            {/* {listItems} */}
            <Typography variant='h5' align='left'> {props.data.RecordName}  </Typography>
            <SortableComponent />
      </div>
    );
  }

export default Child; 



