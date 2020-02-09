import React from 'react';
import Typography from '@material-ui/core/Typography';
import CreateClient from './CreateClient';
import CheckboxesTags from './CheckboxesTags';
import SearchAppBar from './SearchAppBar';

const AllRules = ()=>{
    return (
        <div >
            <Typography variant='h5' color="primary" align="left">
                    Add clients to current Map
            </Typography>

            <SearchAppBar />
            <CreateClient />
            <br/><br/><br/>
                <br/><br/><br/>

            <CheckboxesTags />
        </div>
    );
}

export default AllRules;
