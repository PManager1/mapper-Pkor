import React from 'react';
import Typography from '@material-ui/core/Typography';
import CreateClient from './CreateClient';

const AllRules = ()=>{
    return (
        <div >
            <Typography variant='h5' color="primary" align="left">
                    Add clients to current Map
            </Typography>

            <CreateClient />
        </div>
    );
}

export default AllRules;
