import React from 'react';
import SearchView from './SearchView.js'; 
import CheckboxLabels from './CheckboxLabels.js';
import SampleInputAdornments from '../../components/SampleInputAdornments.js';

const Search = ()=>{
    return (
        <div > 
            <SearchView />
            <CheckboxLabels />
            <SampleInputAdornments />
        </div>
    ); 
}

export default Search; 
