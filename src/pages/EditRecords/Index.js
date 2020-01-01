import React, { Component, useState, useEffect } from 'react';
import Child from './Child'; 
import { fetchRecords } from '../../actions'; 
import { connect } from "react-redux";

import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import { Link } from 'react-router-dom';

// props.records.data
const Test = (props) => {
    // const [ resources, setResources ] = useState([]);

    useEffect(() => {
          props.fetchRecords(); 
    }, [])


    if (!props.records) {
        // console.log(' 39 Data inside it  props.records.data = ', props.records ); 
        return null;
      }
      return (<div>
                <Typography variant='h6' color="primary" align="left">
                Mapper Id: Balckbaud 123345 - Edit Records
                </Typography>


                <Typography paragraph align="right">
                    <Tooltip title="Add New Record" aria-label="add"> 
                        <Fab color="primary" aria-label="add"   component={Link} to="/newrecord" >
                            <AddIcon />   
                        </Fab>
                    </Tooltip>
                </Typography>   


                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>

                <Tooltip title="Edit Records" aria-label="add"> 
                <Fab color="secondary" aria-label="edit"  component={Link} to="/editrecords" >
                    <EditIcon />
                    </Fab>
                </Tooltip>


               

                {props.records.map((item, index) => (
                <Child data={item} key={index}  />
                ))}
      </div>);

  }; 


const mapStateToProps = (state) =>{
    // console.log( '51 -  state.records =', state.records ); 
    return { records: state.records.data }; 
}; 

export default connect(mapStateToProps, { fetchRecords })(Test); 


