import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from "@material-ui/core/Button";
import Child from './Child'; 

export default class Test extends Component {

    constructor() {
        super();
        this.state = {
            records: ['Header Record 1', 'Details Record', 'Trail Record'],
            jsonData: ['Field 1', 'Field 2', 'Field 3', 'Field 4', 'Field 5', 'Field 6']
          };
      }

listItems =  [1, 2, 3, 4, 5].map((number) =>
  <li>{number}</li>
);

  
    render() {
      return (
      <div>
        <h4>Nested Lists</h4>
        <Child />

        <ul>
        { 
            <li>{this.listItems}</li>             
            }
        </ul>
      </div>
    );
  }
};

// export default Test; 
