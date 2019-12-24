import React from 'react'; 
import Button from "@material-ui/core/Button";

class GoogleAuth extends React.Component {

    state = { isSignedIn: null }; 

   
    componentDidMount(){
        window.gapi.load('client:auth2', () =>{
            window.gapi.client.init({
                clientId: '652821201113-v1fh4132uukcmsmvdfjirvm1akrkf7k7.apps.googleusercontent.com',
                scope: 'email'
            }).then(() =>{
                this.auth = window.gapi.auth2.getAuthInstance();

                // this.setState ({ isSignedIn: this.auth.isSignedIn.get() }) 
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen (this.onAuthChange);
            }); 
        }); 
    }


onAuthChange = () =>{
        this.setState({ isSignedIn: this.auth.isSignedIn.get() }); 
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
    if (this.state.isSignedIn === null ){
        return null
    } else if( this.state.isSignedIn ){
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

export default GoogleAuth; 