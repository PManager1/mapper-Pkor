import React from 'react'; 
import { connect } from 'react-redux'; 

 class ClientList extends React.Component{

render(){
    return (
        <div>
            clients List
        </div>
    )
}
}
const mapStateToProps = (state) =>{
    console.log( ' state =', state ); 
    
    return state; 
}; 

export default connect(mapStateToProps)(ClientList); 