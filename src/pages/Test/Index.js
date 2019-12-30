import React, { Component, useState, useEffect } from 'react';
import Child from './Child'; 
import { fetchRecords } from '../../actions'; 
import { connect } from "react-redux";

// props.records.data
const Test = (props) => {

    // const [ resources, setResources ] = useState([]);

    useEffect(() => {
          props.fetchRecords(); 
    }, [])


    if (!props.records) {
        console.log(' 39 Data inside it  props.records.data = ', props.records ); 
        return null;
      }
      return (<div>
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


