import React from 'react'; 
import RecordsExpansionPanel from './RecordsExpansionPanel'; 
import BottomButtons from './BottomButtons'; 
import { makeStyles, useTheme } from '@material-ui/core/styles';

const EditRecord = ()=>{
    return (
            <div >
                <RecordsExpansionPanel />
                <BottomButtons />
            </div>
    ); 
}

export default EditRecord; 


       
       