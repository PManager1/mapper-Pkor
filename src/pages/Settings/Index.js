import React from 'react';
import MapsList from './MapsList';
import Typography from '@material-ui/core/Typography';

const AllRules = ()=>{
    return (
        <React.Fragment>
            <Typography variant='h5' color="primary" align="left">
                Active/ InActive maps
            </Typography>
            <MapsList />
        </React.Fragment>
    );
}

export default AllRules;
