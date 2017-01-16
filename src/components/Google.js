import React from 'react'
import GoogleLogin from 'react-google-login'

export default class GoogleAuth extends React.Component{

  constructor(){
    super();
    this.state = {
      google: {}
    }
  }

  _googleProfile(response){
    this.setState({
      google: response
    })
    console.log(this.state.google);
  }

  render(){
    return(
      <div>
        <GoogleLogin
          clientId="894633110883-ngok4cjanjg2llkjth62iudhms6n6keu.apps.googleusercontent.com"
          buttonText="Googleでログイン"
          onSuccess={this._googleProfile.bind(this)}
          onFailure={this._googleProfile.bind(this)}
        />
          { this.state.google.profileObj ?
            <ul>
              <li>{this.state.google.profileObj.email}</li>
              <li>{this.state.google.profileObj.imageUrl}</li>
              <li>{this.state.google.profileObj.name}</li>
            </ul>
            :null
          }
      </div>
    );
  }
}
