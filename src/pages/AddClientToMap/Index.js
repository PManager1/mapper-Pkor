import React from 'react';
import Typography from '@material-ui/core/Typography';
import CreateClient from './CreateClient';
import CheckboxesTags from './CheckboxesTags';

const AllRules = ()=>{
    return (
        <div >
            <Typography variant='h5' color="primary" align="left">
                    Add clients to current Map
            </Typography>

            <CheckboxesTags />
                <br/><br/><br/>
            <CreateClient />
        </div>
    );
}

export default AllRules;
