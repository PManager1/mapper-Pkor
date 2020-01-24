import React from 'react';
import Typography from '@material-ui/core/Typography';
import AddClientsList from './AddClientsList';

const AllRules = ()=>{
    return (
        <div >
            <Typography variant='h4' color="primary" align="left">
                    Add Clients to current Map
                </Typography>


            <AddClientsList />
        </div>
    );
}

export default AllRules;
