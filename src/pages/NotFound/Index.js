import React from 'react';
import { Link } from 'react-router-dom';
import Button from "@material-ui/core/Button";

const NotFound = ()=>{
    return (
        <div > 
           404 - Not Found  

           

           <Link to="/">
                <Button renderAs="button">
                    <span> Lets Go back to Home</span>
                </Button>
            </Link> 
    
        </div>
    ); 
}

export default NotFound; 
