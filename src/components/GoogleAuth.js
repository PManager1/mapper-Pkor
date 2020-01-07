import React from 'react'; 
import Button from "@material-ui/core/Button";
import { connect } from 'react-redux'; 

import { signIn, signOut } from '../actions';


class GoogleAuth extends React.Component {
   
    componentDidMount(){
        // window.gapi.load('client:auth2', () =>{
        //     window.gapi.client.init({
        //         clientId: '652821201113-v1fh4132uukcmsmvdfjirvm1akrkf7k7.apps.googleusercontent.com',
        //         scope: 'email'
        //     }).then(() =>{
        //         this.auth = window.gapi.auth2.getAuthInstance();

        //         this.onAuthChange(this.auth.isSignedIn.get())
        //         this.auth.isSignedIn.listen (this.onAuthChange);
        //     }); 
        // }); 
    }


onAuthChange = (isSignedIn) =>{
        // this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        if( isSignedIn ){
            this.props.signIn(this.auth.currentUser.get().getId() ); 
        } else{
            this.props.signOut(); 
        }
         
    };
    
    onSignInClick = () => {
        console.log( '  28 - clicked onSignIn'); 
        this.auth.signIn()
      }
    
      onSignOutClick = () => {
        console.log( '  33 - clicked onSignOut'); 
        this.auth.signOut()
      }



renderAuthButton(){
    if (this.props.isSignedIn === null ){
        return null
    } else if( this.props.isSignedIn ){
        return (
        <Button onClick={this.onSignOutClick} className="ui red google button">  
            <i className="google icon"> Sign Out </i>
        </Button> 
        );
    } else {
        return (
            <Button onClick={this.onSignInClick}  className="ui red google button">  
                <i className="google icon"> Sign In </i>
            </Button> 
            );
    }
}


render(){
    return(
        <div> {this.renderAuthButton()} </div>
    ); 
}
}

const mapStateToProps = (state) =>{
    return { isSignedIn : state.auth.isSignedIn }
}

export default connect( mapStateToProps , {signIn,signOut})(GoogleAuth); 