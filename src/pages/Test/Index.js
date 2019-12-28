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

    console.log('17 - props.records ', props.records  );
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


    if (!props.records) {
        console.log(' 39 Data inside it  props.records.data = ', props.records ); 
        return null;
      }
      return ( <div>
                {props.records.map((item, index) => (
                <Child data={item} key={index}  />
                ))}
      </div>);


  }; 


const mapStateToProps = (state) =>{
    console.log( '51 -  state.records =', state.records ); 
    return { records: state.records.data }; 
}; 

export default connect(mapStateToProps, { fetchRecords })(Test); 


