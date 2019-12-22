import React from 'react';
import { connect } from "react-redux";

const ClientDetail = ( props ) => {
    
    console.log( ' 5- props =', props);

    return (
        <div > 
            Client Detail2
            <h1>OtherComponentWithId {props.match.params.id}</h1>
        </div>
    ); 
}


const mapStateToProps = (state) =>{
    console.log( ' state =', state ); 
    return { client: state.selectedClient }; 
}; 

export default connect(mapStateToProps)(ClientDetail); 

