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
            <SortableComponent RecordId={props.data.RecordId}/>              
      </div>
    );
  }

export default Child; 













//  const listItems =  ['C1', 'C2', 'C3', 'C4', 'C5'].map((number) =>
//     <Typography variant='h5' align='left'> {number}</Typography>
// );

// {/* {listItems} */}