import React, {Fragment, Component, useState, useEffect, useLayoutEffect,  lazy, Suspense } from 'react';
import Child from './Child'; 
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
import ls from 'local-storage';

import { fetchRecords, fetchSingleClient } from '../../actions'; 


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

  const { id } = props.match.params; 

    props.fetchSingleClient(id); 

    // const [ resources, setResources ] = useState([]);
    const [Loading, setLoading] = useState(true);

    const [records, setRovies] = useState([]);

    useLayoutEffect(() =>{
        console.log('useLayoutEffect');
    }, [])

        //   useEffect(() => {
        //     // action on update of movies
        // }, [movies]);

    useEffect(() => {
        console.log('mounted');
          props.fetchRecords(props.match.params.id); 
          setTimeout(function(){ setLoading(!Loading); }, 200);
        console.log('58 - fetching records finished  see records =', props.records ); 
    }, [records])

    const renderDescription = () =>{
        return(<div>
            rederning descrioption
        </div>
        )
    }
  
    const goToNewRecord = () =>{
      console.log( '69 - goToNewRecord clicked goToNewRecord props=', props ); 
      props.history.push(`/newrecord/${props.match.params.id}`); 
    }
    const handleEditRecordsBtn = () => {
      console.log('72 -  handleEditRecordsBtn clicked '); 
      props.history.push(`/editrecords/${id}`); 
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

        <Typography variant='h4' color="primary" align="left">
              All Records 
        </Typography>


      <Grid container spacing={3}>
            <Grid item xs={6} sm={4}>
                </Grid>
                <Grid item xs={6} sm={4}>
                </Grid>
                <Grid item xs={6} sm={2}>
           
                <Tooltip title="Edit Records" aria-label="add"> 
                    <Fab variant="extended" onClick={handleEditRecordsBtn}  >

                        <EditIcon className={classes.extendedIcon} />
                        Edit Records
                    </Fab>
                </Tooltip>

                </Grid>
                <Grid item xs={6} sm={2}>
                    <Typography paragraph align="right">
                        <Tooltip title="Add New Record" aria-label="add"> 
                            <Fab color="primary" aria-label="add"  onClick={goToNewRecord}  >
                                <AddIcon />   
                            </Fab>
                        </Tooltip>
                    </Typography>   
                </Grid>
      </Grid>


                {props.records.map((item, index) => (
                <Child id="someid" data={item} key={index}  />
                ))}

              </React.Fragment>}
        </div>);

  }; 


const mapStateToProps = (state) =>{
    // console.log( '51 -  state.records =', state.records ); 
    return { records: state.records }; 
}; 

export default connect(mapStateToProps, { fetchRecords, fetchSingleClient })(Test); 


