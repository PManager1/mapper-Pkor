import React, {Fragment, Component, useState, useEffect, useLayoutEffect,  lazy, Suspense } from 'react';
import Child from './Child'; 
import { fetchRecords } from '../../actions'; 
import { connect } from "react-redux";
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


import { Spinner } from '../../components/common/components/spinner/spinner.js';

import CircularProgress from '@material-ui/core/CircularProgress';

const renderLoader = () => <p>Loading</p>;


const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));


// props.records.data
const Test = (props) => {
    // const [ resources, setResources ] = useState([]);


    const [Loading, setLoading] = useState(true);

    useLayoutEffect(() =>{
        console.log('useLayoutEffect');
    }, [])

    useEffect(() => {
        console.log('mounted');
          props.fetchRecords(); 
          setTimeout(function(){ setLoading(!Loading); }, 500);
          
    }, [])

    const renderDescription = () =>{
        return(<div>
            rederning descrioption
        </div>
        )
    }
  
    const classes = useStyles();      
    // if (!props.records) {
    //     console.log(' 42 Data inside it  props.records.data = ', props.records ); 
    //     return (<div> <Spinner />  </div>);
    //   }

      return (<div>
        
        

        {Loading ?
      <Spinner /> :
      <React.Fragment>

        <Typography variant='h6' color="primary" align="left">
            Mapper Id: Blackbaud 123345
        </Typography>


      <Grid container spacing={3}>
            <Grid item xs={6} sm={4}>
                </Grid>
                <Grid item xs={6} sm={4}>
                </Grid>
                <Grid item xs={6} sm={2}>
           
                <Tooltip title="Edit Records" aria-label="add"> 
                    <Fab variant="extended" component={Link} to="/editrecords" >
                        <EditIcon className={classes.extendedIcon} />
                        Edit Records
                    </Fab>
                </Tooltip>

                </Grid>
                <Grid item xs={6} sm={2}>
                    <Typography paragraph align="right">
                        <Tooltip title="Add New Record" aria-label="add"> 
                            <Fab color="primary" aria-label="add"   component={Link} to="/newrecord" >
                                <AddIcon />   
                            </Fab>
                        </Tooltip>
                    </Typography>   
                </Grid>
      </Grid>


                {props.records.map((item, index) => (
                <Child data={item} key={index}  />
                ))}


      </React.Fragment>}

        
        </div>);

  }; 


const mapStateToProps = (state) =>{
    // console.log( '51 -  state.records =', state.records ); 
    return { records: state.records }; 
}; 

export default connect(mapStateToProps, { fetchRecords })(Test); 


