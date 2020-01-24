import React from 'react';
import Typography from '@material-ui/core/Typography';
import AddClientsList from './AddClientsList';

const AllRules = ()=>{
    return (
        <div >
            <Typography variant='h5' color="primary" align="left">
                    Add clients to current Map
            </Typography>

            <AddClientsList />
        </div>
    );
}

export default AllRules;
