import React from 'react';
import Typography from '@material-ui/core/Typography';
import CheckboxesTags from './CheckboxesTags';
import SearchAppBar from './SearchAppBar';
import RecentlyEditedClients from  './RecentlyEditedClients';
import FullWidthDialog from './FullWidthDialog';

const AllRules = (props)=>{
    return (
        <div >
            <Typography variant='h5' color="primary" align="left">
                    Add clients to current Map
            </Typography>

            <SearchAppBar />


            {/* <FullWidthDialog {...props} /> */}

            <RecentlyEditedClients />

            <br/><br/><br/>
                <br/><br/><br/>

            <CheckboxesTags />
        </div>
    );
}

export default AllRules;
