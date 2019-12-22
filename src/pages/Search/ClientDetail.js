import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { fetchSingleClient, fetchClients } from '../../actions';

const ClientDetail = ( props ) => {

    console.log( '7- props.match.params.id =', props.match.params.id); 

    useEffect(() => {
        // code to run on component mount
        // props.fetchSingleClient(props.match.params.id);
        props.fetchSingleClient('5dfee979e999e512b24222ce');
      }, [])
    
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

export default connect(mapStateToProps, {
    fetchSingleClient
})(ClientDetail); 

