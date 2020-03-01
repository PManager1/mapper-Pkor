import React, { Component, useState, useEffect } from 'react';
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
import { fetchRecords } from '../../actions';

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

    const { search } = props.location;
    console.log( '57 - Test.js -   props.match.params   = ', props );
    console.log( '58 - Test.js -   props  = ', props );
    console.log( '60 - Test.js -   mapName  = ', search );

    let mapString  = search;
    mapString =  mapString.substr(1,mapString.length);



    const [Loading, setLoading] = useState(true);

    useEffect(() => {
      console.log('mounted');
        props.fetchRecords(id);
        setTimeout(function(){ setLoading(!Loading); }, 200);
      console.log('58 - fetching records finished  see records =', props.records );
  }, [])


    const classes = useStyles();

    if (!props.records) {
        // console.log(' 39 Data inside it  props.records.data = ', props.records );
        return null;
      }
      return (<div>
                <Typography variant='h4' color="primary" align="left">
                  Edit Records -  {mapString}
                </Typography>

      <Grid container spacing={3}>
            <Grid item xs={6} sm={4}>
                </Grid>
                <Grid item xs={6} sm={4}>
                </Grid>
                <Grid item xs={6} sm={2}>


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

                {/* {props.records.map((item, index) => ( */}
                <Child data={props.records}   />
                {/* ))} */}
      </div>);

  };


const mapStateToProps = (state) =>{
    return { records: state.records };
};

export default connect(mapStateToProps, { fetchRecords })(Test);


