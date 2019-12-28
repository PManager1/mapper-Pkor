import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from "@material-ui/core/Button";
import Child from './Child'; 

export default class Test extends Component {

    constructor() {
        super();
        this.state = {
            records: ['Header Record-1', 'Details Record-1', 'Trail Record-1']
          };
      }


  listItemsForChild =  [{name: 'Header Record-1', id: 1}, {name: 'Details Record-1', id: 2}, {name: 'Trail Record', id: 3}  ].map((item) =>
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
