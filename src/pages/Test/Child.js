import React, { useEffect } from 'react';
import { connect } from "react-redux";


const Child = (props) => {

  console.log( '11 - this.props ', props  ); 

  useEffect(() => {
    // code to run on component mount
    // props.fetchClients(); 
  }, [])


 const listItems =  ['C1', 'C2', 'C3', 'C4', 'C5'].map((number) =>
  <li>{number}</li>
);

 

    return (
      <div style={{ width: 950, marginLeft: 20  }}>
            {listItems}
      </div>
    );
  }


export default Child; 



