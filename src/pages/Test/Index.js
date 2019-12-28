import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from "@material-ui/core/Button";
import Child from './Child'; 


export default class Test extends Component {

    constructor() {
        super();
        this.state = {
          };
      }


  listItemsForChild =  [{RecordName: 'Header Record-1', RecordId: 1, RecordOrderNo: 1}, {RecordName: 'Details Record-2', RecordId: 2, RecordOrderNo: 2}, {RecordName: 'Trail Record', RecordId: 3, RecordOrderNo: 3}].map((item) =>
      <Child data={item} />
    );

    render() {
      return (
      <div>
        
      {this.listItemsForChild}
        <hr/>in passing data via Child <hr/>
        

      </div>
    );
  }
};

// export default Test; 
