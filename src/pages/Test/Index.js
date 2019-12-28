import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from "@material-ui/core/Button";
import Child from './Child'; 
import { fetchRecords } from '../../actions'; 
import { connect } from "react-redux";

// props.records.data
const Test = (props) => {

    const [ resources, setResources ] = useState([]);

// usingn state make it cccall 

    console.log('17 - props.records.data ', props.records.data  );
        // ${resource}
    const fetchResources =  async () => { 
        const response =  await  axios.get(`http://localhost:3030/records`);
        // setResources ({ resources: response.data }); 
        setResources(response.data); 
        console.log( '22 -   resources ', resources ); 
    }

    useEffect(() => {
        // fetchResources(); 
          // code to run on component mount
          props.fetchRecords(); 
    }, [])



//   const listItemsForChild =  [{RecordName: 'Header Record-1', RecordId: 1, RecordOrderNo: 1}, {RecordName: 'Details Record-2', RecordId: 2, RecordOrderNo: 2}, {RecordName: 'Trail Record', RecordId: 3, RecordOrderNo: 3}].map((item) =>
  const listItemsForChild =  [{RecordName: 'Header Record-1', RecordId: 1, RecordOrderNo: 1}, {RecordName: 'Details Record-2', RecordId: 2, RecordOrderNo: 2}, {RecordName: 'Trail Record', RecordId: 3, RecordOrderNo: 3}].map((item) =>
      <Child data={item} />
    );

      return (
      <div>
        {listItemsForChild}
      </div>
    );
  }; 


const mapStateToProps = (state) =>{
    // console.log( '40 -  state =', state ); 
    return { records: state.records }; 
}; 

export default connect(mapStateToProps, { fetchRecords })(Test); 


