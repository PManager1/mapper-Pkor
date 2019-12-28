import React, { Component , useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from "@material-ui/core/Button";
import Child from './Child'; 
import { fetchRecords } from '../../actions'; 
import { connect } from "react-redux";


// const Test = (props) => {

//     console.log( '11 - this.props ', props  ); 
//     console.log( '12 - props.clients.data ', props.clients.data  ); 
  
//     useEffect(() => {
//       // code to run on component mount
//       props.fetchRecords(); 
//     }, [])

    
class Test extends Component {
    

  listItemsForChild =  [{RecordName: 'Header Record-1', RecordId: 1, RecordOrderNo: 1}, {RecordName: 'Details Record-2', RecordId: 2, RecordOrderNo: 2}, {RecordName: 'Trail Record', RecordId: 3, RecordOrderNo: 3}].map((item) =>
      <Child data={item} />
    );

    render() {
      return (
      <div>
        {this.listItemsForChild}
      </div>
    );
  }
};


const mapStateToProps = (state) =>{
    console.log( '63 -  state =', state ); 
    
    return { clients: state.clients }; 
}; 

export default connect(mapStateToProps, { fetchRecords })(Test); 


