import React from 'react';
import AlignItemsList from './AlignItemsList.js'; 
import ClickableRows from './ClickableRows.js'; 

const CreateFromExistingTemplate = ()=>{
    return (
        <div > 
             <ClickableRows />
             <AlignItemsList />
            
        </div>
    ); 
}

export default CreateFromExistingTemplate; 
