import React from 'react'; 
// import { Col, Row, Container, Form } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import './Footer.scss'; 

import mylogo from '../Images/mylogo.png';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      background: '#f04134',
      paddingTop: '45px',
      height: '500px',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
  
const Footer = () => {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <Grid container spacing={1}>
        {/* xs=3 LTG icon */}
          <Grid item xs={4}>
            <div className="text-center">
                <img className="" alt="foot logo" src={mylogo} />
                <p className="text-center footer-logo-p">
                Copyright 2019 - Liberty Trust Group, Inc.
                All Rights Reserved. *Each franchise office is
                independently owned and operated.
                </p>
                </div>
          </Grid>
          <Grid item xs={2}>
            <div className={classes.paper}> 
            <ul className="ulalign">
            <li className="white-footer-link"> <a className="white-footer-link" href="http://">How it Works</a> </li>
            <li className="white-footer-link">  <a className="white-footer-link" href="http://">Footer</a></li>
            <li className="white-footer-link">  <a className="white-footer-link" href="http://">Locations</a></li>
            <li className="white-footer-link">  <a className="white-footer-link" href="http://">Reviews</a></li>
            <li className="white-footer-link">  <a className="white-footer-link" href="http://">Contact</a></li>
            <li className="white-footer-link">  <a className="white-footer-link" href="http://">Sell</a></li>
            <li className="white-footer-link">  <a className="white-footer-link" href="http://">Sell</a></li>
          </ul>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className={classes.paper}> 
            <ul className="ulalign">
            <li className="white-footer-link"> <a className="white-footer-link" href="http://">We Pay Cash</a> </li>
            <li className="white-footer-link">  <a className="white-footer-link" href="http://">Blog</a></li>
            <li className="white-footer-link">  <a className="white-footer-link" href="http://">Company Info</a></li>
            <li className="white-footer-link">  <a className="white-footer-link" href="http://">Franchise Info</a></li>
            <li className="white-footer-link">  <a className="white-footer-link" href="http://">Liberty Trust Group</a></li>
            <li className="white-footer-link">  <a className="white-footer-link" href="http://">Privacy</a></li>
            <li className="white-footer-link">  <a className="white-footer-link" href="http://">Terms of Service</a></li>
            <li className="white-footer-link">  <a className="white-footer-link" href="http://">Site Map</a></li>
          </ul>      
             </div>
          </Grid>


          <Grid item xs={2}>
            <div className={classes.paper}> 

                Facebook icon
             </div>
          </Grid>





        </Grid>
      </div>
    );
  }

  


// const Footer = () =>{
//         return <div> 
            
//     </div>

// }

export default Footer; 