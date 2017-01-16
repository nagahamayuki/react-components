import React from 'react'
import ReactDOM from 'react-dom'
import FacebookLogin from 'react-facebook-login'

/*

  * facebookダッシュボード
  * https://developers.facebook.com/apps/1337345046340655/dashboard/

*/
export default class FacebookLoginComponent extends React.Component{

  constructor() {
    super();
    this.state = {
      facebook: {}
    }
  }

  _responseFacebook(response){
    console.log(response);
    this.setState({
      facebook: response
    })
  }

  render(){
    return(
      <div>
        <FacebookLogin
          appId="1337345046340655"
          autoLoad={true}
          fields="name,email,picture"
          textButton="Facebookでログイン"
          callback={this._responseFacebook.bind(this)}
        />
          <div>
            <ul>
              <li>{this.state.facebook.name}</li>
              <li>{this.state.facebook.email}</li>
              <li>写真もあります</li>
              <li>{this.state.facebook.id}</li>
            </ul>
            {this.state.facebook.error ? <div>エラーです</div> : null}
          </div>
      </div>
    );
  }
}
