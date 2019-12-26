import React from 'react'; 
import RecordsExpansionPanel from './RecordsExpansionPanel'; 
import BottomButtons from './BottomButtons'; 
import { makeStyles, useTheme } from '@material-ui/core/styles';
import  LinearIndeterminate from '../../components/LinearProgress.js'; 

const Records = ()=>{
    return (
            <div >
                <RecordsExpansionPanel />
                <BottomButtons />
            </div>
    ); 
}

export default Records; 


       
       